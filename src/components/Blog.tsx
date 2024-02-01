const posts = [
  {
    id: 1,
    title: 'What is the Cognitive Systems/Science (COGS) Program?',
    href: '#',
    description: "Cognitive Systems  (COGS) is a multi-disciplinary undergraduate program involving four departments: Computer Science, Linguistics, Philosophy, and Psychology. The program provides students with a grounding in the principles and techniques used by intelligent systems both natural and artificial.  It emphasizes the study of existing systems (e.g., perception; linguistics), the design of new ones (e.g., machine vision; machine intelligence), and the design of interfaces between different forms of intelligent agents (e.g., human-computer interfaces).",
    date: 'Jan 25, 2024',
    datetime: '2024-01-25',
    category: { title: 'About my program', href: '#' },
  },
  // More posts...
]

export default function Blog() {
  return (
    <div className="my-1 items-left max-w-screen-md bg-white pb-20">
      <div className="max-w-screen-md">
        <div className="mx-auto max-w-screen-sm grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="max-w-screen-md flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="rounded-full bg-gray-50 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
