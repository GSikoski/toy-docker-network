from ..db.db import create_connection
from sqlite3 import Connection, Cursor
from ..api.main import get_password_hash
from base import backup, restore


def migrate(cur: Cursor):
    default_pwd = "changeme"
    pwd_in_db = get_password_hash(default_pwd)
    print(pwd_in_db)
    mig_str = f"ALTER TABLE User ADD password TEXT DEFAULT '{pwd_in_db}';"
    cur.execute(mig_str)


if __name__ == "__main__":
    path = "db/database.db"
    backup(path)
    try:
        con: Connection = create_connection(path)
        cur: Cursor = con.cursor()
        migrate(cur)
        con.commit()
        con.close()
    except:
        restore(path)
