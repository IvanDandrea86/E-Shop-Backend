import { Migration } from '@mikro-orm/migrations';

export class Migration20220225215750 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "username" varchar(255) not null, "email" varchar(255) not null, "first_name" varchar(255) not null, "last_name" varchar(255) not null, "telephone" int not null, "password" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
    this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');

    this.addSql('create table "user_address" ("id" serial primary key, "user_id_id" int not null, "addresse_line1" varchar(255) not null, "addresse_line2" varchar(255) not null, "city" varchar(255) not null, "postal_code" int not null, "country" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "user_payement" ("id" serial primary key, "user_id_id" int not null, "payment_type" varchar(255) not null, "provider" varchar(255) not null, "account_no" int not null, "expiry" timestamptz(0) not null, "country" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "shopping_session" ("id" serial primary key, "user_id_id" int not null, "total" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "product_category" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "payment_details" ("id" serial primary key, "order_id" int not null, "amount" int not null, "provider" varchar(255) not null, "status" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "order_details" ("id" serial primary key, "user_id_id" int not null, "payment_id_id" int not null, "total" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "order_details" add constraint "order_details_user_id_id_unique" unique ("user_id_id");');
    this.addSql('alter table "order_details" add constraint "order_details_payment_id_id_unique" unique ("payment_id_id");');

    this.addSql('create table "discount" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "discount_percet" int not null, "active" boolean not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "product" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "sku" varchar(255) not null, "category_id_id" int not null, "price" int not null, "discount_id_id" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "cart_item" ("id" serial primary key, "session_id_id" int not null, "product_id_id" int not null, "quantity" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "order_items" ("id" serial primary key, "order_id_id" int not null, "product_id_id" int not null, "quantity" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    this.addSql('alter table "order_items" add constraint "order_items_product_id_id_unique" unique ("product_id_id");');

    this.addSql('create table "product_inventory" ("id" serial primary key, "product_id_id" int not null, "quantity" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('alter table "user_address" add constraint "user_address_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "user_payement" add constraint "user_payement_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "shopping_session" add constraint "shopping_session_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "order_details" add constraint "order_details_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');
    this.addSql('alter table "order_details" add constraint "order_details_payment_id_id_foreign" foreign key ("payment_id_id") references "payment_details" ("id") on update cascade;');

    this.addSql('alter table "product" add constraint "product_category_id_id_foreign" foreign key ("category_id_id") references "product_category" ("id") on update cascade;');
    this.addSql('alter table "product" add constraint "product_discount_id_id_foreign" foreign key ("discount_id_id") references "discount" ("id") on update cascade;');

    this.addSql('alter table "cart_item" add constraint "cart_item_session_id_id_foreign" foreign key ("session_id_id") references "shopping_session" ("id") on update cascade;');
    this.addSql('alter table "cart_item" add constraint "cart_item_product_id_id_foreign" foreign key ("product_id_id") references "product" ("id") on update cascade;');

    this.addSql('alter table "order_items" add constraint "order_items_order_id_id_foreign" foreign key ("order_id_id") references "order_details" ("id") on update cascade;');
    this.addSql('alter table "order_items" add constraint "order_items_product_id_id_foreign" foreign key ("product_id_id") references "product" ("id") on update cascade;');

    this.addSql('alter table "product_inventory" add constraint "product_inventory_product_id_id_foreign" foreign key ("product_id_id") references "product" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user_address" drop constraint "user_address_user_id_id_foreign";');

    this.addSql('alter table "user_payement" drop constraint "user_payement_user_id_id_foreign";');

    this.addSql('alter table "shopping_session" drop constraint "shopping_session_user_id_id_foreign";');

    this.addSql('alter table "order_details" drop constraint "order_details_user_id_id_foreign";');

    this.addSql('alter table "cart_item" drop constraint "cart_item_session_id_id_foreign";');

    this.addSql('alter table "product" drop constraint "product_category_id_id_foreign";');

    this.addSql('alter table "order_details" drop constraint "order_details_payment_id_id_foreign";');

    this.addSql('alter table "order_items" drop constraint "order_items_order_id_id_foreign";');

    this.addSql('alter table "product" drop constraint "product_discount_id_id_foreign";');

    this.addSql('alter table "cart_item" drop constraint "cart_item_product_id_id_foreign";');

    this.addSql('alter table "order_items" drop constraint "order_items_product_id_id_foreign";');

    this.addSql('alter table "product_inventory" drop constraint "product_inventory_product_id_id_foreign";');

    this.addSql('drop table if exists "user" cascade;');

    this.addSql('drop table if exists "user_address" cascade;');

    this.addSql('drop table if exists "user_payement" cascade;');

    this.addSql('drop table if exists "shopping_session" cascade;');

    this.addSql('drop table if exists "product_category" cascade;');

    this.addSql('drop table if exists "payment_details" cascade;');

    this.addSql('drop table if exists "order_details" cascade;');

    this.addSql('drop table if exists "discount" cascade;');

    this.addSql('drop table if exists "product" cascade;');

    this.addSql('drop table if exists "cart_item" cascade;');

    this.addSql('drop table if exists "order_items" cascade;');

    this.addSql('drop table if exists "product_inventory" cascade;');
  }

}