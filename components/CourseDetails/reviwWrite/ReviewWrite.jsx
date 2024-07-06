import React from "react";

export const ReviewWrite = () => {
  return (
    <div>
      <div class="SILIGURI">
        <h1 className="text-[30px] font-[600] text-[#1F1F1F]  text-center SILIGURI">
          কোর্স সম্পর্কে আপনার মতামত
        </h1>
        <form class="flex flex-col mx-auto gap-2 max-w-lg border-2 mt-5 p-5">
          <fieldset class="contents">
            <div className="flex flex-wrap md:grid grid-cols-2 gap-3 pb-3">
              <div class="flex flex-col">
                <label for="input" class="font-semibold text-sm SILIGURI pb-1">
                  আপনার নাম*
                </label>
                <input
                  name="input"
                  id="input"
                  rows="5"
                  maxlength="256"
                  required
                  placeholder="সম্পূর্ণ নাম"
                  class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm SILIGURI"
                />
              </div>
              <div class="flex flex-col">
                <label for="input" class="font-semibold text-sm SILIGURI pb-1">
                  আপনার রোল*
                </label>
                <input
                  name="input"
                  id="input"
                  rows="5"
                  maxlength="256"
                  required
                  placeholder="Academic roll"
                  class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"
                />
              </div>
            </div>

            <div class="flex flex-col">
              <label for="input" class="font-semibold text-sm SILIGURI pb-1">
                কোর্স সম্পর্কে আপনার মন্তব্যটি লিখুন
              </label>
              <textarea
                name="input"
                id="input"
                rows="5"
                maxlength="256"
                required
                placeholder="ছোট আকারে আপনার মতামত টি প্রধান করুন"
                class="rounded-lg p-4 bg-black/5 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              class="rounded-lg p-3 bg-[#080D2A] text-white border-2 border-solid border-[#080D2A] transition-colors hover:bg-amber-700 hover:border-none font-medium text-base leading-none flex flex-row items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="18"
                height="18"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="font-bold">পাঠিয়ে দিন</span>
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
