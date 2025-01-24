'use server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function checkRentCode(code: number) {
	return prisma.rents.findFirst({
		where: {
			accessCode: code,
		},
	})
}
