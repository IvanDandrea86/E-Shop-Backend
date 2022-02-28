import { Migration } from '@mikro-orm/migrations';

export class Migration20220228145306 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_first_name_check";');
    this.addSql('alter table "user" alter column "first_name" type varchar(255) using ("first_name"::varchar(255));');
    this.addSql('alter table "user" alter column "first_name" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_first_name_check";');
    this.addSql('alter table "user" alter column "first_name" type varchar(255) using ("first_name"::varchar(255));');
    this.addSql('alter table "user" alter column "first_name" set not null;');
  }

}
