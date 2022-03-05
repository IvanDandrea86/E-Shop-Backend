import { EntityManager } from "@mikro-orm/core";
import { User } from "../entities/user/user.entity";

export async function seedDatabase(em: EntityManager) {
    const mockUser={
        email: "test@github.com",
        username: "MichalLytek",
        password: "s3cr3tp4ssw0rd",    }

    const user= new User(mockUser)
  const defaultUser = em.create(User, user);
  em.persist(defaultUser);

  await em.flush();
  return { defaultUser };
}