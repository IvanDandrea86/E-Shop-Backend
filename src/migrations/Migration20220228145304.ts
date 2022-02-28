import { Migration } from '@mikro-orm/migrations';

export class Migration20220228145304 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_last_name_check";');
    this.addSql('alter table "user" alter column "last_name" type varchar(255) using ("last_name"::varchar(255));');
    this.addSql('alter table "user" alter column "last_name" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_last_name_check";');
    this.addSql('alter table "user" alter column "last_name" type varchar(255) using ("last_name"::varchar(255));');
    this.addSql('alter table "user" alter column "last_name" set not null;');
  }

}
