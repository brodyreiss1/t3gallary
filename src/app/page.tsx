import Link from "next/link";

const mockUrls = [
  "https://3glk0b0u4v.ufs.sh/f/ihFoBdSvIRLnvUBxaV6xK7rUPGzJlwFsTbh2VMcotSX1CLkA",
  "https://3glk0b0u4v.ufs.sh/f/ihFoBdSvIRLnvUk1aK6xK7rUPGzJlwFsTbh2VMcotSX1CLkA",
  "https://3glk0b0u4v.ufs.sh/f/ihFoBdSvIRLnHmQ6goqlFdJuIYiaTfj305HPyxRDZneprWoB",
  "https://3glk0b0u4v.ufs.sh/f/ihFoBdSvIRLnJ8vWctojV68GdRUC9hAy4OHYLpQcvNxDE32l",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
