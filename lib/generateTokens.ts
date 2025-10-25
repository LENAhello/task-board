import { randomUUID } from "crypto";
import { prisma } from "./prisma"

export const generateResetPasswordToken = async (email: string) => {
  const resetPasswordToken = await prisma.resetPasswordToken.findFirst({where: {email}});
  if(resetPasswordToken) {
    await prisma.resetPasswordToken.delete({where: {id: resetPasswordToken.id}});
  }

  const newResetPasswordToken = await prisma.resetPasswordToken.create({
    data: {
      token: randomUUID(),
      expires: new Date(new Date().getTime() + 3600 * 1000 * 2),
      email
    }
  });
  return newResetPasswordToken;
}