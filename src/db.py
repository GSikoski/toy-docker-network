import sqlite3
from sqlite3 import Error, Connection, Cursor
from rest_classes.message import User

def create_connection(path) -> Connection:
    connection = None
    try:
        connection = sqlite3.connect(path)
        print("Connection to SQLite DB successful")
    except Error as e:
        print(f"The error '{e}' occurred")

    return connection

def create_user(user: User):
    con : Connection = create_connection("db/database.db")
    cur : Cursor = con.cursor()
    cur.execute(f"INSERT INTO User VALUES ('{user.id}', '{user.name}')")
    con.commit()


