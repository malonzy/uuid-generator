import {useEffect, useState} from "react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
    const [v4,setV4] = useState('')
    const [v1,setV1] = useState('')
    const [v4CopyMsg,setV4CopyMsg] = useState('')
    const [v1CopyMsg,setV1CopyMsg] = useState('')
    const apiUrl = '/api/uuid'

    function getV4(){
        fetch(`${apiUrl}/v4`)
            .then(res => res.json())
            .then(data => {setV4(data.uuid)})
    }

    function getV1(){
        fetch(`${apiUrl}/v1`)
            .then(res => res.json())
            .then(data => {setV1(data.uuid)})
    }

    useEffect(()=>{
        getV4()
        getV1()
    },[])

  return (
    <>
        <Head>
            <title>UUID Generator</title>
        </Head>
        <main className="w-8/12 mx-auto h-screen">
            <h1 className="text-4xl font-bold text-center py-10">UUID Generator</h1>
            <div className={`flex gap-24 pt-16`}>
                <div className="flex flex-col gap-4 w-full">
                    <h4 className="font-bold text-2xl">UUID v4</h4>
                    <div>
                        <div className="dark:bg-white/20 bg-black/10 h-[64px] p-4 rounded-lg flex gap-4 items-center justify-between">
                            {v4 &&
                                <>
                                    <code>{v4}</code>
                                    <div className="flex gap-2 items-center">
                                        <button className="dark:bg-white/30 bg-black/20 w-8 h-8 rounded" onClick={getV4}>
                                            <i className="fa-solid fa-rotate-right"></i>
                                        </button>
                                        <button className="dark:bg-white/30 bg-black/20 w-8 h-8 rounded" onClick={()=>{
                                            navigator.clipboard.writeText(v4).then(() => {
                                                setV4CopyMsg('Copied!')
                                                setTimeout(()=>{
                                                    setV4CopyMsg('')
                                                },1000)
                                            })
                                        }}>
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                        {v4CopyMsg && <div className="flex items-center text-green-600 gap-2 mt-1 text-sm"><i className="fa-solid fa-check"></i> {v4CopyMsg}</div>}
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h4 className="font-bold text-2xl">UUID v1</h4>
                    <div>
                        <div className="dark:bg-white/20 bg-black/10 h-[64px] p-4 rounded-lg flex gap-4 items-center justify-between">
                            {v1 &&
                                <>
                                    <code>{v1}</code>
                                    <div className="flex gap-2 items-center">
                                        <button className="dark:bg-white/30 bg-black/20 w-8 h-8 rounded" onClick={getV1}>
                                            <i className="fa-solid fa-rotate-right"></i>
                                        </button>
                                        <button className="dark:bg-white/30 bg-black/20 w-8 h-8 rounded" onClick={()=>{
                                            navigator.clipboard.writeText(v1).then(() => {
                                                setV1CopyMsg('Copied!')
                                                setTimeout(()=>{
                                                    setV1CopyMsg('')
                                                },1000)
                                            })
                                        }}>
                                            <i className="fa-regular fa-copy"></i>
                                        </button>
                                    </div>
                                </>
                            }
                        </div>
                        {v1CopyMsg && <div className="flex items-center text-green-600 gap-2 mt-1 text-sm"><i className="fa-solid fa-check"></i> {v1CopyMsg}</div>}
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <h4 className="text-3xl font-bold mb-4">APIs</h4>
                <div className="my-4">
                    <p>V1</p>
                    <p className="dark:bg-white/20 bg-black/10 py-1 px-4 rounded w-fit">
                        <code className="text-orange-400 font-bold">GET</code>: <Link href="/api/uuid/v1" target="_blank">/api/uuid/v1</Link> <i className="fa-light fa-square-arrow-up-right text-blue-500"></i>
                    </p>
                </div>
                <div className="my-4">
                    <p>V4</p>
                    <p className="dark:bg-white/20 bg-black/10 py-1 px-4 rounded w-fit">
                        <code className="text-orange-400 font-bold">GET</code>: <Link href="/api/uuid/v4" target="_blank">/api/uuid/v4</Link> <i className="fa-light fa-square-arrow-up-right text-blue-500"></i>
                    </p>
                </div>
            </div>
        </main>
    </>
  )
}
