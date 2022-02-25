import { Migration } from '@mikro-orm/migrations';

export class Migration20220225191059 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_payement" ("id" serial primary key, "user_id_id" int not null, "payment_type" varchar(255) not null, "provider" varchar(255) not null, "account_no" int not null, "expiry" timestamptz(0) not null, "country" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');

    this.addSql('alter table "user_payement" add constraint "user_payement_user_id_id_foreign" foreign key ("user_id_id") references "user" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user_payement" cascade;');
  }

}
