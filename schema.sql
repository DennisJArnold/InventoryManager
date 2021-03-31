DROP DATABASE IF EXISTS items;
CREATE DATABASE items;

\c items;

CREATE TABLE items (
 id BIGSERIAL,
 item_name VARCHAR,
 par decimal,
 cost decimal,
 size decimal
);


ALTER TABLE items ADD CONSTRAINT items_pkey PRIMARY KEY (id);

CREATE TABLE orders (
 id BIGSERIAL,
 date DATE,
 total decimal
);


ALTER TABLE orders ADD CONSTRAINT orders_pkey PRIMARY KEY (id);

CREATE TABLE items_orders (
 id BIGSERIAL,
 item_id INTEGER,
 order_id INTEGER,
 quantity INTEGER
);


ALTER TABLE items_orders ADD CONSTRAINT items_orders_pkey PRIMARY KEY (id);

ALTER TABLE items_orders ADD CONSTRAINT items_orders_item_id_fkey FOREIGN KEY (item_id) REFERENCES items(id);
ALTER TABLE items_orders ADD CONSTRAINT items_orders_order_id_fkey FOREIGN KEY (order_id) REFERENCES orders(id);
