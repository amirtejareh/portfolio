import Image from "next/legacy/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export const dynamic = "force-dynamic";

export default function NotFound() {
  const locale = useLocale();

  return (
    <>
      <div className="flex mt-[164px] gap-[24px] mb-[128px] flex-col justify-center items-center">
        <Image
          src={`/images/404.png`}
          loading="lazy"
          width={342}
          height={144}
          alt="404 Not Found"
        />
        <span className="text-[32px] font-[700] text-gray-150">not found</span>
      </div>
    </>
  );
}
