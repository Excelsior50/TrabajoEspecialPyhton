class Tabla:
    
    # Constructor
    def __init__(self):
        pass
    
    # *** CRUD ***
    # Creador/"Constructor" de instancias de subclase
    def crear(self, valores):
        for campo,valor in zip(self.campo, valores):
            setattr(self, campo, valor)
        

    
    def guardar_db(self):
        pass
    
    # Lectura
    @classmethod 
    def obtener(cls):
        pass
    
    # Modificación
    @classmethod 
    def actualizar(cls):
        pass
    
    # Eliminación
    @classmethod 
    def eliminar(cls):
        pass
    
    # *** Método común en CRUD (encapsulado) ***
    @classmethod
    def __conectar(cls, consulta):
        
        try:
            cursor = cls.conexion.cursor()
        except Exception as e:
            cls.conexion.cursor()
            cursor = cls.conexion.cursor()
        
        cursor.execute(consulta)
        datos = cursor.fetchall()
        #Lista por comprension
        resultado = [cls(registro) for registro in datos]
        cls.conecion.close()
        
        return resultado    

from connect_db import cursor,connection

#--------CRUD------

# Create
insert_query = "INSERT INTO categories (ProductName, Brand) VALUES (%s, %s)"
category_data = ("Electronics", "Products related to electronic devices")
cursor.execute(insert_query, category_data)
connection.commit()  # Guarda los cambios en la base de datos

insert_query = "INSERT INTO products (CategoryName, Description) VALUES (%s, %s)"
product_data = ("Electronics", "Products related to electronic devices")
cursor.execute(insert_query, product_data)
connection.commit()  # Guarda los cambios en la base de datos

insert_query = "INSERT INTO suppliers (SupplierName, ContactName) VALUES (%s, %s)"
supplier_data = ("Electronics", "Products related to electronic devices")
cursor.execute(insert_query, supplier_data)
connection.commit()  # Guarda los cambios en la base de datos


# Read
select_query = "SELECT * FROM products"
cursor.execute(select_query)
products = cursor.fetchall()

for product in products:
    print(product)  # Aquí puedes procesar cada fila como desees


select_query = "SELECT * FROM suppliers"
cursor.execute(select_query)
suppliers = cursor.fetchall()

for supplier in suppliers:
    print(supplier)  # Aquí puedes procesar cada fila como desees


select_query = "SELECT * FROM Categories"
cursor.execute(select_query)
categories = cursor.fetchall()

for category in categories:
    print(category)  # Aquí puedes procesar cada fila como desees
    

# Update
update_query = "UPDATE Products SET UnitPrice = %s WHERE ProductID = %s"
new_price = 199.99
product_id = 1
cursor.execute(update_query, (new_price, product_id))
connection.commit()  # Guarda los cambios en la base de datos


# Delete
delete_query = "DELETE FROM Suppliers WHERE SupplierID = %s"
supplier_id = 1
cursor.execute(delete_query, (supplier_id,))
connection.commit()  # Guarda los cambios en la base de datos
