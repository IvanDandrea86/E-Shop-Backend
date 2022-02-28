import { Migration } from '@mikro-orm/migrations';

export class Migration20220228145300 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_telephone_check";');
    this.addSql('alter table "user" alter column "telephone" type int using ("telephone"::int);');
    this.addSql('alter table "user" alter column "telephone" drop not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" drop constraint if exists "user_telephone_check";');
    this.addSql('alter table "user" alter column "telephone" type int using ("telephone"::int);');
    this.addSql('alter table "user" alter column "telephone" set not null;');
  }

}
