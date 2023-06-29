'use client';
import Button from '@/components/Button';

export default async function Task() {
  const tasks = [
    {
      id: 1,
      country: 'US',
      category: 'finance',
      website: 'www.cnbank.com',
      requirement: 'aaaaaaaaa',
      reward: 'bbbbbb'
    },
    {
      id: 2,
      country: 'US',
      category: 'finance',
      website: 'www.cnbank.com',
      requirement: 'aaaaaaaaa',
      reward: 'bbbbbb'
    },
    {
      id: 3,
      country: 'US',
      category: 'finance',
      website: 'www.cnbank.com',
      requirement: 'aaaaaaaaa',
      reward: 'bbbbbb'
    },
    {
      id: 4,
      country: 'US',
      category: 'finance',
      website: 'www.cnbank.com',
      requirement: 'aaaaaaaaa',
      reward: 'bbbbbb'
    },
    {
      id: 5,
      country: 'US',
      category: 'finance',
      website: 'www.cnbank.com',
      requirement: 'aaaaaaaaa',
      reward: 'bbbbbb'
    }
  ];
  return (
    <main className="flex h-max flex-col items-center justify-between p-16">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
        }}
        className="mt-10 flex h-10 w-full max-w-2xl justify-between space-x-4 px-5"
      >
        <input
          type="text"
          name="domain"
          onInput={(e) => {
            console.log(e.target.value);
          }}
          autoComplete="off"
          placeholder="domain.com"
          pattern="^(?:[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.)?[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$"
          required
          className="min-w-0 flex-auto rounded-md border border-gray-300 px-4 focus:border-black focus:ring-0 sm:text-sm"
        />
        <button
          type="submit"
          className="w-28 rounded-md border border-solid border-black bg-black py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-white hover:text-black focus:outline-none"
        >
          Entry
        </button>
      </form>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8">
        <div className="mt-12 space-y-2 sm:mt-16 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tasks.map((task) => {
            return (
              <div
                key={task.id}
                className="divide-y divide-zinc-600 rounded-lg border bg-zinc-900 shadow-sm"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold leading-6 text-white">
                    {task.website}
                  </h2>
                  <p className="mt-4 text-zinc-300">{task.country}</p>
                  <p className="mt-4 text-zinc-300">{task.category}</p>
                  <p className="mt-4 text-zinc-300">{task.requirement}</p>
                  <p className="mt-4 text-zinc-300">{task.reward}</p>
                  <Button
                    variant="slim"
                    type="button"
                    onClick={() => {}}
                    className="mt-8 block w-full rounded-md py-2 text-center text-sm font-semibold text-white hover:bg-zinc-900"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
