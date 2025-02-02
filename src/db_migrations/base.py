from shutil import copyfile
from os import remove


def backup(path: str):
    copyfile(path, "db/backup_database.db")


def restore(path: str):
    copyfile("db/backup_database.db", path)
    remove("db/backup_database.db")
