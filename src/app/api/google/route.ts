import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    console.log({
      client_email: process.env.client,
      private_key: process.env.private!.replace(/\\n/g, "\n"),
    });
    console.log(process.env.sheet);
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.client,
        private_key: process.env.private!.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.sheet,
      range: "Sheet1!A1",
      valueInputOption:'USER_ENTERED',
      requestBody: {
        values: data,
      },
    });

    return new NextResponse("", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
  }
}
