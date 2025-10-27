import mysql.connector
from mysql.connector import Error

# ==============================
# CONFIGURACIÓN DE CONEXIÓN
# ==============================
DB_CONFIG = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "ciclovias_db"
}

# ==============================
# FUNCIÓN DE CONEXIÓN
# ==============================
def conectar():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        return conn
    except Error as e:
        print(f"❌ Error de conexión: {e}")
        return None

# ==============================
# MENÚ PRINCIPAL
# ==============================
def menu():
    while True:
        print("\n===== SISTEMA DE CICLOVÍAS (MySQL + SP) =====")
        print("1) Gestionar Personas")
        print("2) Gestionar Usuarios")
        print("3) Gestionar Rutas")
        print("4) Ver Reportes")
        print("0) Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            menu_personas()
        elif opcion == "2":
            menu_usuarios()
        elif opcion == "3":
            menu_rutas()
        elif opcion == "4":
            listar_reportes()
        elif opcion == "0":
            print("👋 Saliendo del sistema...")
            break
        else:
            print("⚠️ Opción inválida.")

# ==============================
# SUBMENÚ PERSONAS
# ==============================
def menu_personas():
    while True:
        print("\n--- Gestión de Personas ---")
        print("1) Insertar Persona")
        print("2) Listar Personas (Activas)")
        print("3) Listar Todas (Incluye eliminadas)")
        print("4) Borrado lógico por ID")
        print("0) Volver")
        op = input("Seleccione una opción: ")

        if op == "1":
            insertar_persona()
        elif op == "2":
            listar_personas()
        elif op == "3":
            listar_personas_todo()
        elif op == "4":
            borrar_persona()
        elif op == "0":
            break
        else:
            print("⚠️ Opción inválida.")

def insertar_persona():
    rut = input("RUT: ")
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    correo = input("Correo: ")
    telefono = input("Teléfono: ")

    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_persona_insertar", [rut, nombre, apellido, correo, telefono])
            conn.commit()
            print("✅ Persona insertada correctamente.")
        except Error as e:
            print(f"❌ Error al insertar: {e}")
        finally:
            conn.close()

def listar_personas():
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.callproc("sp_persona_listar")
            for result in cursor.stored_results():
                for fila in result.fetchall():
                    print(f"{fila['id_persona']}: {fila['nombre']} {fila['apellido']} - {fila['correo']}")
        except Error as e:
            print(f"❌ Error al listar: {e}")
        finally:
            conn.close()

def listar_personas_todo():
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.callproc("sp_persona_listar_todo")
            for result in cursor.stored_results():
                for fila in result.fetchall():
                    estado = "Eliminado" if fila['deleted'] else "Activo"
                    print(f"{fila['id']}: {fila['nombre']} {fila['apellido']} ({estado})")
        except Error as e:
            print(f"❌ Error al listar todo: {e}")
        finally:
            conn.close()

def borrar_persona():
    id_p = input("ID de la persona a eliminar: ")
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_persona_borrado_logico", [id_p])
            conn.commit()
            print("🗑️ Persona marcada como eliminada.")
        except Error as e:
            print(f"❌ Error al eliminar: {e}")
        finally:
            conn.close()

# ==============================
# SUBMENÚ USUARIOS
# ==============================
def menu_usuarios():
    while True:
        print("\n--- Gestión de Usuarios ---")
        print("1) Insertar Usuario")
        print("2) Listar Usuarios")
        print("3) Borrado lógico por ID")
        print("0) Volver")
        op = input("Seleccione una opción: ")

        if op == "1":
            insertar_usuario()
        elif op == "2":
            listar_usuarios()
        elif op == "3":
            borrar_usuario()
        elif op == "0":
            break
        else:
            print("⚠️ Opción inválida.")

def insertar_usuario():
    id_persona = input("ID Persona: ")
    id_rol = input("ID Rol: ")
    id_comuna = input("ID Comuna: ")
    contraseña = input("Contraseña: ")

    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_usuario_insertar", [id_persona, id_rol, id_comuna, contraseña])
            conn.commit()
            print("✅ Usuario creado correctamente.")
        except Error as e:
            print(f"❌ Error al insertar usuario: {e}")
        finally:
            conn.close()

def listar_usuarios():
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.callproc("sp_usuario_listar")
            for result in cursor.stored_results():
                for fila in result.fetchall():
                    print(f"{fila['id_usuario']}: {fila['nombre']} {fila['apellido']} - {fila['nombre_rol']} ({fila['nombre_comuna']})")
        except Error as e:
            print(f"❌ Error al listar usuarios: {e}")
        finally:
            conn.close()

def borrar_usuario():
    id_u = input("ID Usuario a eliminar: ")
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_usuario_borrado_logico", [id_u])
            conn.commit()
            print("🗑️ Usuario marcado como eliminado.")
        except Error as e:
            print(f"❌ Error al eliminar usuario: {e}")
        finally:
            conn.close()

# ==============================
# SUBMENÚ RUTAS
# ==============================
def menu_rutas():
    while True:
        print("\n--- Gestión de Rutas ---")
        print("1) Insertar Ruta")
        print("2) Listar Rutas")
        print("3) Borrado lógico por ID")
        print("0) Volver")
        op = input("Seleccione una opción: ")

        if op == "1":
            insertar_ruta()
        elif op == "2":
            listar_rutas()
        elif op == "3":
            borrar_ruta()
        elif op == "0":
            break
        else:
            print("⚠️ Opción inválida.")

def insertar_ruta():
    nombre = input("Nombre de la ruta: ")
    descripcion = input("Descripción: ")
    id_comuna = input("ID Comuna: ")
    estado = input("Estado (Activa/Inactiva): ")

    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_ruta_insertar", [nombre, descripcion, id_comuna, estado])
            conn.commit()
            print("✅ Ruta insertada correctamente.")
        except Error as e:
            print(f"❌ Error al insertar ruta: {e}")
        finally:
            conn.close()

def listar_rutas():
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.callproc("sp_ruta_listar")
            for result in cursor.stored_results():
                for fila in result.fetchall():
                    print(f"{fila['id_ruta']}: {fila['nombre_ruta']} ({fila['nombre_comuna']}) - {fila['estado']}")
        except Error as e:
            print(f"❌ Error al listar rutas: {e}")
        finally:
            conn.close()

def borrar_ruta():
    id_r = input("ID Ruta a eliminar: ")
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor()
            cursor.callproc("sp_ruta_borrado_logico", [id_r])
            conn.commit()
            print("🗑️ Ruta marcada como eliminada.")
        except Error as e:
            print(f"❌ Error al eliminar ruta: {e}")
        finally:
            conn.close()

# ==============================
# LISTAR REPORTES
# ==============================
def listar_reportes():
    conn = conectar()
    if conn:
        try:
            cursor = conn.cursor(dictionary=True)
            cursor.callproc("sp_reporte_listar")
            for result in cursor.stored_results():
                for fila in result.fetchall():
                    print(f"#{fila['id_reporte']}: {fila['nombre']} - {fila['nombre_ruta']} [{fila['tipo_reporte']}] - {fila['fecha_reporte']}")
        except Error as e:
            print(f"❌ Error al listar reportes: {e}")
        finally:
            conn.close()

# ==============================
# PROGRAMA PRINCIPAL
# ==============================
if __name__ == "__main__":
    menu()
