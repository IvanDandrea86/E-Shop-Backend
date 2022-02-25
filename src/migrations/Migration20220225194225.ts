import { Migration } from '@mikro-orm/migrations';

export class Migration20220225194225 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "shopping_session" ("id" serial primary key, "user_id_id" int not null, "total" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('create table "product_category" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "discount" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "discount_percet" int not null, "active" boolean not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "product" ("id" serial primary key, "name" varchar(255) not null, "desc" varchar(255) not null, "sku" varchar(255) not null, "category_id_id" int not null, "price" int not null, "discount_id_id" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "product_inventory" ("id" serial primary key, "product_id_id" int not null, "quantity" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "deleted_at" timestamptz(0) not null);');

    this.addSql('create table "cart_item" ("id" serial primary key, "session_id_id" int not null, "product_id_id" int not null, "quantity" int not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('alter table "shopping_session" add constraint "shopping_session_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "product" add constraint "product_category_id_id_foreign" foreign key ("category_id_id") references "product_category" ("id") on update cascade;');
    this.addSql('alter table "product" add constraint "product_discount_id_id_foreign" foreign key ("discount_id_id") references "discount" ("id") on update cascade;');

    this.addSql('alter table "product_inventory" add constraint "product_inventory_product_id_id_foreign" foreign key ("product_id_id") references "product" ("id") on update cascade;');

    this.addSql('alter table "cart_item" add constraint "cart_item_session_id_id_foreign" foreign key ("session_id_id") references "shopping_session" ("id") on update cascade;');
    this.addSql('alter table "cart_item" add constraint "cart_item_product_id_id_foreign" foreign key ("product_id_id") references "product" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cart_item" drop constraint "cart_item_session_id_id_foreign";');

    this.addSql('alter table "product" drop constraint "product_category_id_id_foreign";');

    this.addSql('alter table "product" drop constraint "product_discount_id_id_foreign";');

    this.addSql('alter table "product_inventory" drop constraint "product_inventory_product_id_id_foreign";');

    this.addSql('alter table "cart_item" drop constraint "cart_item_product_id_id_foreign";');

    this.addSql('drop table if exists "shopping_session" cascade;');

    this.addSql('drop table if exists "product_category" cascade;');

    this.addSql('drop table if exists "discount" cascade;');

    this.addSql('drop table if exists "product" cascade;');

    this.addSql('drop table if exists "product_inventory" cascade;');

    this.addSql('drop table if exists "cart_item" cascade;');
  }

}
