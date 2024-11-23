import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col gap-8`}
    >
      <Head>
        <title>
          MRL Construction - General Contractors: Construction & Remodeling
          Services
        </title>
        <meta
          name="description"
          content="MRL Construction, LLC is a Seattle based firm providing home remodeling and additions that meet both aesthetic tastes and budget needs."
        />
      </Head>
      <header
        role="banner"
        className="h-[400px] text-center flex flex-col bg-blue-700 bg-[url('/img/hillhook1.jpg')] bg-cover bg-center bg-no-repeat w-full"
      >
        <div className="my-auto mx-0">
          <h1 className="text-white text-8xl leading-tight tracking-tight font-bold m-0 [text-shadow:_7px_7px_0_rgb(0_0_0/50%)]">
            MRL Construction
          </h1>
          <h2 className="text-gray-200 mb-0 text-2xl font-bold tracking-tight">
            General Contractors: Construction & Remodeling Services
          </h2>
        </div>
      </header>

      <main>
        <div className="prose prose-xl prose-stone mx-auto">
          <h2>
            Beautiful, Custom Home Remodeling <br />
            and Additions
          </h2>
          <p>
            MRL Construction, LLC is a Seattle based firm providing home
            remodeling and additions that meet both aesthetic tastes and budget
            needs. With over 35 years of experience, owner and lead carpenter
            Mark Lynd is an expert at building the Pacific Northwest home,
            working with a team of craftspeople that offer complementary
            carpentry and construction services.
          </p>

          <p className="text-center">
            <a
              className="text-5xl no-underline text-indigo-600"
              href="tel:+12065470055"
            >
              (206) 547-0055
            </a>
          </p>
          <hr />
          <h2>Additions</h2>
          <Image
            src="/img/additions.jpg"
            alt="Empty home addition"
            width={1200}
            height={700}
          />
          <p>
            Additions are part of our special practice. What would you add to
            your home?
          </p>
          <hr />
          <h2>Remodels</h2>
          <Image
            src="/img/remodel.jpg"
            alt="Remodeled kitchen"
            width={1024}
            height={768}
          />
          <p>
            What would you remodel? Kitchen, bathrooms, bedrooms, sunrooms,
            mudrooms. We work with you to make your house feel like your home.
          </p>
          <hr />
          <h2>Kitchens</h2>
          <Image
            src="/img/kitchen.jpg"
            alt="New kitchen"
            width={1024}
            height={768}
          />
          <p>
            We specialize in remodeling kitchens to meet your aesthetic taste
            and functional needs.
          </p>
          <hr />
          <p>
            MRL Construction renews and refurbishes your home so that feels
            right for you. If you’re looking to give your bathroom a fresh look,
            build an home addition, or redo the whole house, contact MRL
            Construction for an initial conversation and estimate.
          </p>
          <p className="text-center">
            <a
              className="text-5xl no-underline text-indigo-600"
              href="tel:+12065470055"
            >
              (206) 547-0055
            </a>
          </p>
        </div>
      </main>

      <footer className="mt-24 mb-8 mx-0 text-gray-500 text-center">
        &copy; {new Date().getFullYear()} MRL Construction, LLC. All Rights
        Reserved.
      </footer>
    </div>
  );
}
