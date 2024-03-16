import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    let client = "sheet-575@lawyer-381819.iam.gserviceaccount.com";
    let pr =
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCm2k2ESyEcP7Jy\nhBNsMKGpaFaYBwNgRk3xGjzhYvQCFuiRaiG0RGS13LOpHw8WdsiaPjvYtiniyk4U\neMuaY/OQSQKQZ4SEJjraMdV6Pz/1bHkkxZLh3aQPKWcom4Q0jQhurDfFGTwbc/Q2\nNvrqqbW3OmcDVIabw7Jqto6WlgrlTVbjIQVXaCUurTDV+InFOotOA8iJhIz1oYdU\n8wfL5a3aZ4F91NQapielGM3zjJfOU4otdf0hbm9pffn3IQ/ln9wxyqOfl0tZFFVy\nJrt1FCkPNeX7s6uRKS9OdKKhpvstiUSSa+z36+XIX4TnwZPh+sbX+uSwlZsPOUG8\ng2W0uEA7AgMBAAECggEASGmky735ZDOmw/lbHpCqkIW2Uyt0BSPt7q3m7yBNaty7\nWWS4tO4b0Su0EzlmCGdL31kUCxTf78vCADN+lYY8bgmpobczdVDMKOcI0ZHCtcY6\ne0F94iWZbnUXDrITueTdXH7Eg3dUtUtpGOBanF5D/X3MuE7GTrKra5HIJ0V9/A6V\npVHKNL/mTB1Xk9vYABxB28fhuBzktx0yHitRb+TZgGxLK0HFzeKu/sZjzzpivAZT\nwHv9PEMENm5esvQzoofCxnFm/DvbR+Im9Oh2U7zZzusfQNaPPvfZQ72Q1n+I0kFv\nkdWgpYUCkwS+5/j9RRmZrB6+zQ6LW9AxMvgoWxnnVQKBgQDVG0VC/xKxo4yD9nlU\nQa774Si2vpkEaWWdiuAVuXZ/bucB/VX6wnrgU/u78dFfV8jIhn1v2tY41xMp6Mir\n3sXA8Hsav5SlUJXaqc6bICPqdQW5oPgZY3vQ22ZIAXxisLfM9Cg//8UIRUEkH1l9\ndBShBglR2USniOIpZ6u7mL+yLQKBgQDIb7dK/fZQfY2vO+AcZeY5RoZC3lnzMi3e\nxPG5LoSk7JBIyEDhFDpfqfSFlSVqJtmaljWnsd7i4C1kL2xl9t0Cy0sDM4Bgxpnl\nnWctfk7lBEm+Eft/Q20lv89ysC8jWdgSHs8y6SIEgdCwnu7FSI+mPSe8SmrfsXUL\nYxd51i2FBwKBgQCIXc//ZBvBQme7VfAjw3hGw7j635IpKYyVuHVWUXyLZRs7wbHQ\nKbzZacRvavlQqmrYLn98ISvt6Wrg6Y3ntUEUCo6r+iYTdzK9XuXPjEyPTlzggSnh\njTCA4LRdpV3EBVNIOoC7G18owLBDfjAUwEAnHia+kmqFTmlyl11kSQV57QKBgD7U\nxmB7u/r/YKrN2jMMvl61/OB5UzkpQbfThPLH4kzQ22n1XGEyNhpG7J/zYQclppEP\nBULMP1Jfc9s0Aob0G9QEZj9apaOwng2cift43MJt1a//cxcxy8VJm34YPK6YO2Ny\nxQDwk/lVuFWlfLPbSyyRfyNHMLlup4IqTfGjciGBAoGAHNOIcB/BZ5ATaVVrr2fy\ne0qIx2urHmEPoa463b88e5CiJrOvfPnVHbxEghRQVSxN4k59jfDbTztBrWEcd8KU\nKK897vZoMEMXksOqesU39uiUVP2xC/3Krzx/GlD/JBcUH53gIaw3U2A4A15DfOEN\nAdhplmH1xVlgEl5t/fLhFgg=\n-----END PRIVATE KEY-----\n";
    let sheet = "1Acq-4B9iebHS70vUGJcK-2_vK57N0IcDsfIBBDXf5sQ";

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: client,
        private_key: pr.replace(/\\n/g, "\n"),
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
      spreadsheetId: sheet,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
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
