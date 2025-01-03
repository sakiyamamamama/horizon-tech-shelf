import Link from 'next/link';
import React from 'react';

export default function BasicCurriculum() {
    return (
        <Link href={`/posts/course/basic`}>
            <section className='bg-slate-50 mb-4 mx-auto rounded-md p-3 shadow-2xl hover:shadow-none hover:translate-y-1 hover:bg-neutral-100 transition-all duration-300'>
                <div className=''>
                    <h2 className='text-2xl font-medium mt-0'>
                        基礎班カリキュラム
                    </h2>
                </div>
                <div className=''>
                    <p className='text-neutral-500 text-sm'>
                        Pythonの基礎文法やFletでのアプリ開発の方法を学ぶことができます。
                        また、プログラミングをする上で必須とも言える「VisualStudioCode」や「Git」といったツールの使い方を学ぶこともできます。
                        基礎班カリキュラムでは、それらを通してプログラミングの基礎を身につけてもらうことを目的としています。
                    </p>
                </div>
            </section>
        </Link>
    )
}
