"use client";
import Image from "next/image";
import { useState } from "react";
import { sendRequest } from "./request/send";
import { google } from "googleapis";

export type DataType = {
  __VIEWSTATE: string;
  __EVENTARGUMENT: string;
  __EVENTTARGET: string;
  __EVENTVALIDATION: string;
};

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<string>();
  const [res, setRes] = useState();

  // const send = async () => {
  //   // 'use server'
  //   fetch('/api/request', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((d) => console.log(d))
  //   // let body: string;
  //   // var formBody = [];
  //   // for (var property in data) {
  //   //   var encodedKey = encodeURIComponent(property);
  //   //   let key = property as keyof DataType;
  //   //   var encodedValue = encodeURIComponent(data[key]);
  //   //   formBody.push(encodedKey + "=" + encodedValue);
  //   // }
  //   // formBody.push(
  //   //   encodeURIComponent("ctl00$BodyContent$ddl_tuluv_bdal") +
  //   //     "=" +
  //   //     encodeURIComponent(99)
  //   // );
  //   // body = formBody.join("&");
  //   // await sendRequest(data)
  // };
  const districts = [
    {
      id: "худ",
      value: "худ",
    },
    {
      id: "хан-уул",
      value: "худ",
    },
    {
      id: "хан",
      value: "худ",
    },
    {
      id: "бзд",
      value: "бзд",
    },
    {
      id: "баянзүрх",
      value: "бзд",
    },
    {
      id: "баянгол",
      value: "бгд",
    },
    {
      id: "бгд",
      value: "бгд",
    },
    {
      id: "сбд",
      value: "сбд",
    },
    {
      id: "сүхбаатар",
      value: "сбд",
    },
    {
      id: "бхд",
      value: "бхд",
    },
    {
      id: "багахангай",
      value: "бхд",
    },
    {
      id: "бнд",
      value: "бнд",
    },
    {
      id: "багануур",
      value: "бнд",
    },
    {
      id: "схд",
      value: "схд",
    },
    {
      id: "сонгинохайрхан",
      value: "схд",
    },
    {
      id: "чд",
      value: "чд",
    },
    {
      id: "нлд",
      value: "чд",
    },
    {
      id: "чингэлтэй",
      value: "налайх",
    },
    {
      id: "нд",
      value: "налайх",
    },
    {
      id: "налайх",
      value: "налайх",
    },
  ];

  const committees = "хороо";
  const send = async () => {
    try {
      let students = data!.split("\n");

      let row = students.map((s) => {
        const data = s.split("\t").filter((f) => f != "");
        let address = data[data.length - 2].split(" ");
        let district = districts.find((d) => {
          return address[0].toLowerCase().startsWith(d.id);
        })?.value;
        let committee = "";
        address.find((a, i) => {
          if (
            a.toLowerCase().includes(committees) &&
            !a.toLowerCase().includes("хороолол")
          ) {
            let c = a.toLowerCase().split(committees);

            let value = "";
            if (c[0] != "") {
              value = c[0].match(/\d+/)?.[0] ?? "";
            } else {
              value = address[i - 1].match(/\d+/)?.[0] ?? "";
          
            }
            committee = value;
            // return value;
          }
        });

        if (district != undefined) {
          data.push(district.toUpperCase());
        } else {
          data.push("");
        }
        if (committee != undefined) {
          data.push(committee);
        } else {
          data.push("");
        }

        return data;
      });

     await fetch("/api/google", {
        method: "POST",
        body: JSON.stringify(row),
      });
      console.log("adsf");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* {JSON.stringify(res)} */}
      {/* <span>__VIEWSTATE: </span> */}

      <textarea
        // type="text"

        name="data"
        style={{
          border: "1px solid black",
          width: "100%",
          height: "100%",
          fontSize: 10,
        }}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={send}>send</button>

      {/* <br />
      <span>__EVENTARGUMENT: </span>
      <input
        type="text"
        style={{ border: "1px solid black" }}
        onChange={(e) =>
          setData((prev) => ({ ...prev, __EVENTARGUMENT: e.target.value }))
        }
      />
      <br />
      <span>__EVENTTARGET: </span>
      <input
        type="text"
        style={{ border: "1px solid black" }}
        onChange={(e) =>
          setData((prev) => ({ ...prev, __EVENTTARGET: e.target.value }))
        }
      />
      <br />
      <span>__EVENTVALIDATION: </span>
      <input
        type="text"
        style={{ border: "1px solid black" }}
        onChange={(e) =>
          setData((prev) => ({ ...prev, __EVENTVALIDATION: e.target.value }))
        }
      />
      <br />
      <button onClick={() => send()}>Send</button> */}
    </>
  );
}
