"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostMetaData } from '@/types/postMetaData';
import { getIconsByPosts } from '@/lib/services/notionApiService';

type Props = {
    course: string;
    posts: PostMetaData[];
};

const SingleCourse = ({ course, posts }: Props) => {
    const icons = getIconsByPosts(posts);

    return (
        <Link href={`/posts/course/${course}/1`}>
            <section className="bg-white border border-gray-200 rounded-md p-2 mb-4 mx-5 shadow-sm hover:bg-neutral-50 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">{course}</h2>
                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">
                        {posts.length} カリキュラム
                    </span>
                </div>
                <div className="mt-2">
                    {posts.slice(0, 5).map((post, i) => (
                        <div key={i} className="flex items-center text-gray-700 mb-0.5 text-sm border-l border-gray-300 pl-2">
                            <div className="flex">
                                {icons[i] ? (
                                    <Image
                                        src={`/horizon-atlas/notion_data/eachPage/${post.slug}/icon.png`}
                                        alt=""
                                        height={20}
                                        width={20}
                                        className="h-5 w-5 rounded mr-2"
                                    />
                                ) : (
                                    <span className="text-gray-400 mr-2">・</span>
                                )}
                                <span>{post.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Link>
    );
};

export default SingleCourse;
