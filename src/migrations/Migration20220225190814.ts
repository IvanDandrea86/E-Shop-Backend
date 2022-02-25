import { Migration } from '@mikro-orm/migrations';

export class Migration20220225190814 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_address" ("id" serial primary key, "user_id_id" int not null, "addresse_line1" varchar(255) not null, "addresse_line2" varchar(255) not null, "city" varchar(255) not null, "postal_code" int not null, "country" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('alter table "user_address" add constraint "user_address_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "user" add column "first_name" varchar(255) not null, add column "last_name" varchar(255) not null, add column "telephone" int not null;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user_address" cascade;');

    this.addSql('alter table "user" drop column "first_name";');
    this.addSql('alter table "user" drop column "last_name";');
    this.addSql('alter table "user" drop column "telephone";');
  }

}
