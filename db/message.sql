CREATE TABLE Message (
    id TEXT PRIMARY KEY,
    message TEXT NOT NULL,
    sender_id TEXT NOT NULL,
    recipient_id TEXT NOT NULL,
    FOREIGN KEY (sender_id) REFERENCES User(id),
    FOREIGN KEY (recipient_id) REFERENCES User(id)
);