import React from "react";
import Typography from "./Typography";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import { useTitle } from "@/TitleContext";
export default function Editor() {
  const { content, setContent } = useTitle();
  const [preview, setPreview] = React.useState(true);

  return (
    <>
      <div className="flex flex-col  sm:flex-row">
        {preview && (
          <>
            <div className="flex h-full w-full flex-col items-start ">
              <div className="flex h-14 w-full flex-row bg-[#F5F5F5] p-4 dark:bg-[#1D1F22]">
                <Typography
                  type="heading-small"
                  className="text-[#7C8187] dark:text-[#C1C4CB]"
                >
                  MARKDOWN
                </Typography>
              </div>
              <div className=" h-full w-full bg-white px-2 py-2 dark:bg-[#151619]">
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="min-h-screen w-full  border-0  bg-white font-mono text-[#35393F] accent-transparent  outline-0 focus:border-0 focus:outline-0 focus:ring-0 dark:bg-[#151619] dark:text-[#C1C4CB]"
                  placeholder="Start typing..."
                />
              </div>
            </div>
            <div className=" w-[2px] bg-[#E4E4E4] dark:bg-[#5A6069]" />
          </>
        )}

        <div className="flex h-full w-full flex-col items-start">
          <div className="flex h-14 w-full flex-row items-center justify-between bg-[#F5F5F5] p-4 dark:bg-[#1D1F22]">
            <Typography
              type="heading-small"
              className="text-[#7C8187] dark:text-[#C1C4CB]"
            >
              PREVIEW
            </Typography>
            <button
              className="group"
              type="button"
              onClick={() => setPreview(!preview)}
            >
              {preview ? (
                <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="group-hover:fill-[#E46643]"
                    d="M7.784.003c4.782-.144 7.597 4.31 8.109 5.198a.8.8 0 0 1 0 .8c-.688 1.2-3.255 5.086-7.677 5.198h-.2c-4.71 0-7.405-4.326-7.909-5.198a.8.8 0 0 1 0-.8C.803 4.001 3.362.115 7.784.003Zm.38 1.6h-.3c-3.199.08-5.286 2.71-6.086 3.998C2.482 6.73 4.73 9.68 8.176 9.6c3.199-.08 5.262-2.711 6.086-3.999-.712-1.127-2.967-4.086-6.398-3.998ZM8 2.803A2.799 2.799 0 1 1 8 8.4a2.799 2.799 0 0 1 0-5.598Zm0 1.599A1.2 1.2 0 1 0 8 6.8a1.2 1.2 0 0 0 0-2.4Z"
                    fill="#7C8187"
                  />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    className="group-hover:fill-[#E46643]"
                    d="M1.38.027a.795.795 0 0 1 .769.206L14.815 12.9a.792.792 0 0 1 0 1.124.792.792 0 0 1-1.124 0L9.234 9.567a2.77 2.77 0 0 1-3.753-3.753L1.024 1.357a.795.795 0 0 1 .357-1.33Zm.998 3.832 1.156 1.116a10.846 10.846 0 0 0-1.773 2.153c.696 1.117 2.929 4.038 6.333 3.959a6.127 6.127 0 0 0 1.346-.198l1.25 1.25a7.505 7.505 0 0 1-2.556.53h-.198c-4.663 0-7.331-4.282-7.83-5.145a.792.792 0 0 1 0-.792A12.58 12.58 0 0 1 2.378 3.86Zm5.328-2.272c4.726-.143 7.52 4.267 8.028 5.145.15.24.163.542.031.792a12.58 12.58 0 0 1-2.304 2.874l-1.195-1.116a10.846 10.846 0 0 0 1.813-2.154c-.705-1.116-2.937-4.045-6.333-3.958a6.127 6.127 0 0 0-1.346.198L5.149 2.117a7.505 7.505 0 0 1 2.557-.53Zm-.974 5.486v.055c0 .656.532 1.188 1.188 1.188l.047-.008-1.235-1.235Z"
                    fill="#7C8187"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`min-h-screen w-full  bg-white  dark:bg-[#151619] `}>
            <div
              className={`space-y-6 px-6 py-3 pb-16 ${
                preview ? " " : "lg:mx-auto lg:w-1/2"
              }`}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <Typography
                      type="h1"
                      {...props}
                      className="text-[#35393F] dark:text-white"
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <Typography
                      type="h2"
                      {...props}
                      className="text-[#35393F] dark:text-white"
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <Typography
                      type="h3"
                      {...props}
                      className="text-[#35393F] dark:text-white"
                    />
                  ),
                  h4: ({ node, ...props }) => (
                    <Typography
                      type="h4"
                      {...props}
                      className="text-[#35393F] dark:text-white"
                    />
                  ),
                  h5: ({ node, ...props }) => (
                    <Typography
                      type="h5"
                      {...props}
                      className="text-[#35393F] dark:text-white"
                    />
                  ),
                  h6: ({ node, ...props }) => (
                    <Typography
                      type="h6"
                      {...props}
                      className="text-[#E46643] dark:text-[#E46643]"
                    />
                  ),

                  p: ({ node, ...props }) => (
                    <Typography
                      type="p"
                      {...props}
                      className=" text-[#7C8187] dark:text-[#C1C4CB]"
                    />
                  ),

                  code: ({ node, ...props }) => (
                    <>
                      {props.inline ? (
                        <Typography
                          type="code"
                          {...props}
                          className="inline text-[#35393F] dark:text-white"
                        />
                      ) : (
                        <div className="h-full w-full rounded bg-[#F5F5F5] p-6 dark:bg-[#2B2D31]">
                          <Typography
                            type="code"
                            {...props}
                            className="text-[#35393F] dark:text-white"
                          />
                        </div>
                      )}
                    </>
                  ),
                  blockquote: ({ node, ...props }) => (
                    <div className="rounded border-l-4 border-[#E46643] bg-[#F5F5F5] p-6 dark:bg-[#2B2D31]">
                      <Typography
                        type="p2"
                        className="text-[#35393F] dark:text-white"
                      >
                        {props.children}
                      </Typography>
                    </div>
                  ),
                  a: ({ node, ...props }) => (
                    <a href={props.href}>
                      <Typography
                        type="p2"
                        className="inline text-[#35393F] underline dark:text-white"
                      >
                        {props.children}
                      </Typography>
                    </a>
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-inside list-disc px-6 marker:text-[#E46643]">
                      <Typography
                        type="p"
                        className="inline text-[#7C8187] dark:text-[#C1C4CB]"
                      >
                        {props.children}
                      </Typography>
                    </ul>
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-inside list-decimal px-6 ">
                      <Typography
                        type="p"
                        className="inline text-[#7C8187] dark:text-[#C1C4CB]"
                      >
                        {props.children}
                      </Typography>
                    </ol>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
