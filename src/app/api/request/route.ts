import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const r = await req.json()
    const formData = new FormData()
    formData.append('__VIEWSTATE', r.__VIEWSTATE)
    formData.append('__EVENTARGUMENT', r.__EVENTARGUMENT)
    formData.append('__EVENTTARGET', r.__EVENTTARGET)
    formData.append('__EVENTVALIDATION', r.__EVENTVALIDATION)
    
    const res = await axios.post(`https://student.xcloud.mn/students/`, r, {

        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            '.AspNet.Cookies': "yj2CYz1n5sTasaONvMWzbZpkW9U1_vZGNaf1MOMohpTukcdSq3D3LqszVxMdIvc9JLPbMmLm3i0Nwc2u0qfGdNovA5AZUiCNFDbXPJeDQ5zTPCW26MAvFg4y84kr2Vxh4WjWIW4FU2AxZnnVII2x9aVj2tSB_IXM-kv_mPF8-o7eZBV7f0h9o9eAGd8VJJ0LbkdgbV-EVgiJR-Md77bj35gj2QdxmOtvP68IZ4OOVE3xW1e6nEZTrT94X1_sVqQF679g_X6_KQ3kLZCr0-_x8zig9ka1BGiRXJ7xEDNgkmuRb4sEhGwEEHqc7PNvuVYyuMx6T3DTII3mTjLXZgkv0ArDwGaLQKcJdkPhAfjXBNXTd0W3hT7wm1qG0LR2_YnmzqSw19M2Ia9KzOj-O3PxLRP8AF5_T2yYGNCxcWBRrTg7bsyvy8VW_ac2wtAvFzX3YkDWXBdU0CvONE4wf8LsIepNmAPBVLoE60rW6EH6TqMVz3ZpuKz0YepqG_SmRsA9inq1n9SYi4RU5U85ucEEgUA1TN323tx4tuLkM0vTCWEEiHApIdfBFdVXKyeXcWQ7Pp0Ahe3QHGpqyq0LG2vwXcYHi7MI6wIpdRn5DHcBYZdIuhTAix07QqIRnyZyS-PaZ0afoX3WcibTF1GWZ6gK5zXVIjO6tyH6JsqwerpmZIQgFZTytROmWUnoO0adeHdgcCAGTNQEbpAn0PZWyQR2xntZEzZXZ2JqfCb9tkkmbGDsinIsFYZnEYmALEsEKdGJXltatJZ8PWrYj9jY-W60MyT0yQz492rUxdCuK62Zmg16EmMq98e4BDiNdztHXM4UyRMHcLHPHMAKLb1Tk7ExLxjqnAmqaCFLGWjwYWcJTeYz61m8OrVlKYkj0mSvAoiDu8l5_GTpJ_1ShU6_kParzUogm945ur6967SDa1_ARorjDhMcbMNrQmDTg_xzdOV3RHwp05PP7V3Q6Cr0XUITMRYdYNkV7_rCgSk4h7Uipjh6pNsMgQUJdikOCl3mWx89Yr21lNczxzi1XPP7LuZUrM0rPyUXKeOu2yMXUFzrm_ATaUWvFKBnM7eQTDBr1g5tcBF5Kzu1md-YtEzUFENtdDF69WIlzYFdvOGxWQUDh5v5JrBQeXD9Slc62zHZjs5LHilLUy6ovjkKGP1uer9qjGF4_hTDUCu0GVmG8DqRRUX0PQKDgjHRiAXxjhy8D6lfKnCkJ1z4CUw3jIsnut8emX7EyYLhH68rrkjmWSzv32sJqA7ntEPKEDBaZ4Av53_1IUMgCPnzL_xE1H_pGh-a1iVED9HBaN4vJc97mdXU73ztq1ooAHWXE9Ll6sT6pFvOa-dojAWch7nEzivCt5MrKToRDUkLu6MKafcVwn0jKAGp6e1mOgo39EJBTq2L9-cf-up86WZKajmV8G5xaNLaxD-u1U8llGD20TQC-dIPV2lLVR3tklpz05hfoAYpT_Zigj3kM_DWT6eL5Oq5NccR04XmfMTS524fsvrNCegCqB_Af6kGbzyYG9A-R3sCEg16ThOpaIUFaKDOcjUPgrQdi0WlLzkEX44UcHH-NQxvyxWkm-R9vr-KVHKLY73501SaBwmBrbSjyCKqOPihVvaKgtZgr5r6TFxfGsmy_UvPX25hbuzEKhOf40LwDUy645fql6ltDch-TSpfjg_FeZUYW41-SlXEqt55YqsyGwdfXmvlYU_3fdOoKr_wB0jKev1OtsBC23HoVb9xeQfR2a3VQF4IBVvUY2geuEDQu2twwdmISIAp8Ua0e9iHoNOlT6YMb9bkylff4UjtniaH-K8CckcJgz12pNnBGGeXysD50Sz6VLg2YXi27kiB8QkerlqK9uWzOFRcV6VOOYPvZ5wAKKBuAv89C_4ObWiw1n5gos8IuFvumyrnutn6CIe6KZ4TnU0XZP-08NAtqox7GzYWLYOcLOt8MMf9ERchvmp7bX1zJoslFMNs6sZExSYgdige1BZ51k0TUPqhkKYBcJt-pAFEMkRHz8zSd5KM7ppYAIWiu9X73DEdEwlVADK2yc0G4yeLpG2TndoXAzYVMHAaQ58GteembATLzCbR0G6_YGk",
                'ASP.NET_SessionId': "2wlj1w224q4mwzvjnur4plwt"
        },
      
    })
    
    console.log(res.request);

    return NextResponse.json({})
}