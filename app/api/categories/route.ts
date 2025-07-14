import { connectToDb } from "@/lib/helpers"
import prisma from "@/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDb();
    const categories = await prisma.category.findMany()
    return NextResponse.json({message: "Success", categories}, {status: 200})
  } catch (err) {
    NextResponse.json({message: "Error", err}, {status: 500})
  } finally {
    await prisma.$disconnect();
  }

}

export const POST = async (req: Request) => {
  try {
    const { name } = await req.json();
    await connectToDb();
    const category = await prisma.category.create({data: {name}});
    return NextResponse.json({message: "Success", category}, {status: 200})
  } catch (err) {
    NextResponse.json({message: "Error", err}, {status: 500})
  } finally {
    await prisma.$disconnect();
  }

}