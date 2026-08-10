export type Article = {
  slug: string
  category: string
  categoryEn: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  date: string
  readTime: number
  accent: string
  content: string[]
  contentEn: string[]
}

export const articles: Article[] = [
  {
    slug: 'how-to-choose-right-website-architecture',
    category: 'طراحی و معماری',
    categoryEn: 'Design & Architecture',

    title: 'چطور معماری مناسب سایت را انتخاب کنیم؟',
    titleEn: 'How to Choose the Right Website Architecture',

    excerpt: 'انتخاب معماری سایت فقط انتخاب بین وردپرس، کدنویسی اختصاصی یا یک فریم‌ورک نیست. معماری درست باید با نوع کسب‌وکار، رفتار کاربران، حجم داده، بودجه و مسیر رشد آینده هماهنگ باشد.',

    excerptEn: 'Choosing a website architecture is not simply about picking WordPress, custom development, or a framework. The right architecture should match the business, user behavior, data volume, budget, and future growth.',

    date: '۱۴۰۵/۰۵/۱۸',
    readTime: 10,
    accent: '#8a2be2',

    content: [
      'وقتی قرار است برای یک کسب‌وکار سایت طراحی شود، معمولاً یکی از اولین سؤال‌ها این است که «سایت را با چه تکنولوژی‌ای بسازیم؟». وردپرس بهتر است یا توسعه اختصاصی؟ React یا Vue؟ سایت روی چه سروری قرار بگیرد؟ آیا از همان ابتدا باید سراغ معماری پیچیده و چندلایه برویم؟',

      'اما در یک پروژه حرفه‌ای، این‌ها معمولاً اولین سؤال‌ها نیستند. قبل از انتخاب تکنولوژی باید بدانیم قرار است چه مسئله‌ای را حل کنیم. سایتی که برای معرفی یک شرکت ساخته می‌شود، از نظر معماری با یک فروشگاه اینترنتی چند هزار محصولی، یک سامانه رزرو یا یک پلتفرم SaaS یکسان نیست؛ حتی اگر ظاهر هر چهار سایت در نگاه اول شبیه هم باشد.',

      'معماری سایت در واقع نقشه‌ای است که مشخص می‌کند بخش‌های مختلف یک محصول وب چگونه در کنار یکدیگر قرار می‌گیرند، داده‌ها چگونه جابه‌جا می‌شوند، کاربران چگونه با سیستم تعامل می‌کنند و سایت در صورت افزایش محتوا، کاربر یا امکانات چگونه می‌تواند رشد کند.',

      'به همین دلیل، معماری خوب لزوماً پیچیده‌ترین معماری نیست. معماری خوب، معماری‌ای است که برای مسئله واقعی پروژه اندازه و ساختار مناسبی داشته باشد.',

      '## قبل از انتخاب تکنولوژی، خود کسب‌وکار را بشناسید',

      'یکی از اشتباهات رایج در طراحی سایت این است که انتخاب تکنولوژی قبل از شناخت کسب‌وکار انجام شود. ممکن است یک تیم به دلیل علاقه یا تجربه قبلی خود همیشه از یک تکنولوژی خاص استفاده کند و بعد تلاش کند نیازهای پروژه را با همان ابزار تطبیق دهد.',

      'روش حرفه‌ای‌تر برعکس است: ابتدا نیازها مشخص می‌شوند و سپس ابزار مناسب انتخاب می‌شود.',

      'برای مثال، فرض کنید یک متخصص قرار است یک وب‌سایت شخصی داشته باشد. هدف سایت می‌تواند معرفی فرد، نمایش سوابق، نمونه‌کارها، مقالات، راه‌های ارتباطی و حضور بهتر در نتایج جست‌وجو باشد. در چنین پروژه‌ای احتمالاً نیازی به یک زیرساخت پیچیده با چند سرویس مستقل و معماری سنگین وجود ندارد.',

      'حالا همین مسئله را برای یک فروشگاه اینترنتی با هزاران محصول، جست‌وجوی پیشرفته، فیلترها، حساب کاربری، سبد خرید، پرداخت، مدیریت سفارش و اتصال به سرویس‌های دیگر در نظر بگیرید. طبیعتاً نیازهای فنی این دو پروژه کاملاً متفاوت خواهد بود.',

      'بنابراین اولین مرحله معماری، شناخت محصول است؛ نه انتخاب فریم‌ورک.',

      '## معماری سایت باید چه چیزهایی را در نظر بگیرد؟',

      'برای انتخاب معماری مناسب، چند عامل مهم باید هم‌زمان بررسی شوند: نوع کسب‌وکار، تعداد و نوع صفحات، حجم محتوا و داده، تعداد کاربران، نحوه مدیریت محتوا، امکانات تعاملی، نیازهای سئو، سرعت مورد انتظار، بودجه، تیمی که قرار است سایت را نگهداری کند و مهم‌تر از همه، مسیر احتمالی رشد پروژه.',

      'هیچ‌کدام از این عوامل به‌تنهایی تصمیم نهایی را مشخص نمی‌کنند. معماری مناسب معمولاً حاصل کنار هم قرار گرفتن همین محدودیت‌ها و نیازهاست.',

      '## سایت معرفی با فروشگاه اینترنتی یکسان نیست',

      'گاهی از بیرون، همه سایت‌ها فقط مجموعه‌ای از صفحات هستند؛ اما از دید فنی تفاوت زیادی بین آن‌ها وجود دارد.',

      'یک سایت شرکتی ممکن است چند صفحه خدمات، صفحه درباره ما، پروژه‌ها، مقالات و فرم تماس داشته باشد. در این حالت مدیریت محتوا، سرعت، سئو و تجربه کاربری اهمیت زیادی دارند، اما منطق تجاری سایت نسبتاً ساده است.',

      'در یک فروشگاه اینترنتی، شرایط متفاوت است. محصول، موجودی، قیمت، تخفیف، تنوع محصول، سفارش، پرداخت، حساب کاربری و وضعیت ارسال همگی به یکدیگر وابسته‌اند. هرچه تعداد محصولات و سفارش‌ها بیشتر شود، اهمیت طراحی درست داده‌ها و فرایندها نیز بیشتر می‌شود.',

      'از طرف دیگر، یک سامانه رزرو ممکن است اصلاً شبیه فروشگاه نباشد، اما از نظر منطقی پیچیده‌تر باشد؛ چون باید زمان‌های آزاد، ظرفیت، رزروهای قبلی، قوانین لغو و وضعیت کاربران را مدیریت کند.',

      'پس «تعداد صفحات» معیار خوبی برای سنجش پیچیدگی یک سایت نیست. گاهی یک سایت ده‌صفحه‌ای از نظر منطق داخلی بسیار پیچیده‌تر از سایتی با صدها صفحه محتوایی است.',

      '## چه زمانی معماری ساده انتخاب بهتری است؟',

      'اگر نیازهای پروژه ساده و مشخص هستند، انتخاب یک معماری سبک معمولاً مزایای زیادی دارد. توسعه سریع‌تر می‌شود، هزینه نگهداری پایین‌تر می‌آید و تیم توسعه مجبور نیست برای نیازهایی که هنوز وجود ندارند زیرساخت اضافه ایجاد کند.',

      'برای مثال، یک سایت معرفی خدمات، سایت شخصی، وب‌سایت یک کسب‌وکار محلی یا بسیاری از سایت‌های محتوایی می‌توانند با معماری نسبتاً ساده و در عین حال حرفه‌ای ساخته شوند.',

      'ساده بودن معماری به معنی ضعیف بودن سایت نیست. اتفاقاً اگر یک پروژه کوچک بدون دلیل با چندین سرویس، لایه و ابزار مختلف ساخته شود، ممکن است نتیجه فقط هزینه و پیچیدگی بیشتر باشد.',

      'یک اصل مهم در مهندسی نرم‌افزار این است که پیچیدگی باید زمانی وارد سیستم شود که واقعاً به آن نیاز داریم، نه صرفاً به این دلیل که امکان استفاده از آن وجود دارد.',

      '## چه زمانی باید سراغ معماری اختصاصی‌تر رفت؟',

      'وقتی سایت دیگر فقط یک ابزار معرفی نیست و منطق اختصاصی کسب‌وکار وارد آن می‌شود، نیازهای معماری نیز تغییر می‌کنند.',

      'حساب‌های کاربری، نقش‌ها و سطح دسترسی مختلف، داشبوردهای اختصاصی، فرایندهای چندمرحله‌ای، ارتباط با APIهای متعدد، محاسبات اختصاصی، سیستم رزرو، مدیریت موجودی، پرداخت‌های پیچیده یا حجم بالای داده می‌توانند دلایلی برای استفاده از یک معماری اختصاصی‌تر باشند.',

      'در چنین پروژه‌هایی مهم است که معماری بر اساس خود محصول طراحی شود. استفاده از یک قالب آماده یا ساختار عمومی ممکن است برای شروع سریع باشد، اما اگر منطق اصلی کسب‌وکار با آن هماهنگ نباشد، در آینده توسعه پروژه دشوار و پرهزینه خواهد شد.',

      'در این شرایط، هزینه اصلی فقط هزینه نوشتن کد نیست؛ هزینه تغییر دادن سیستمی است که از ابتدا برای نیاز واقعی طراحی نشده است.',

      '## آیا باید از همان ابتدا برای میلیون‌ها کاربر آماده باشیم؟',

      'یکی از سوءتفاهم‌های رایج در معماری نرم‌افزار این است که یک پروژه کوچک باید از روز اول با معماری‌ای ساخته شود که بتواند میلیون‌ها کاربر را مدیریت کند.',

      'اگر محصول هنوز چند صد کاربر دارد، ساختن زیرساخت بسیار پیچیده فقط برای احتمال رشد آینده معمولاً تصمیم اقتصادی خوبی نیست. چنین معماری‌ای هزینه توسعه، نگهداری و عیب‌یابی را افزایش می‌دهد، در حالی که ممکن است هیچ‌وقت به بخش زیادی از آن نیاز پیدا نکنیم.',

      'از طرف دیگر، این به معنی نادیده گرفتن آینده نیست. تفاوت مهمی بین «طراحی برای رشد» و «ساختن بیش از نیاز امروز» وجود دارد.',

      'طراحی برای رشد یعنی ساختار پروژه طوری باشد که در صورت افزایش منطقی نیازها بتوان بخش‌هایی از آن را توسعه داد، بدون اینکه مجبور شویم کل سیستم را از ابتدا بازنویسی کنیم.',

      'برای مثال ممکن است یک سایت در ابتدا با یک سرور و یک پایگاه داده به‌راحتی کار کند. اگر در آینده تعداد کاربران یا حجم پردازش افزایش پیدا کرد، می‌توان بخش‌هایی مانند کش، جست‌وجو، ذخیره‌سازی فایل یا پردازش‌های پس‌زمینه را به‌تدریج بهینه کرد.',

      'این رویکرد معمولاً منطقی‌تر از آن است که همه این زیرساخت‌ها از روز اول فقط به خاطر احتمال رشد ایجاد شوند.',

      '## نقش سئو در انتخاب معماری',

      'معماری سایت فقط روی سرعت یا توسعه‌پذیری تأثیر نمی‌گذارد؛ ساختار فنی می‌تواند روی سئو نیز اثر داشته باشد.',

      'نحوه تولید صفحات، ساختار URLها، مدیریت متادیتا، لینک‌سازی داخلی، قابلیت دسترسی موتورهای جست‌وجو به محتوا، سرعت صفحات، رندر شدن محتوا و مدیریت صفحات تکراری همگی باید در معماری و طراحی سایت در نظر گرفته شوند.',

      'این موضوع مخصوصاً برای سایت‌هایی که قرار است از گوگل ورودی قابل توجهی بگیرند اهمیت بیشتری دارد. اگر معماری از ابتدا طوری طراحی شود که تولید و سازمان‌دهی صفحات جدید دشوار باشد، رشد محتوایی سایت نیز در آینده با محدودیت مواجه می‌شود.',

      'به همین دلیل سئو نباید صرفاً در پایان پروژه به عنوان یک مرحله جداگانه به سایت اضافه شود. بخشی از پایه‌های سئو در همان زمان طراحی ساختار سایت تعیین می‌شوند.',

      '## هزینه معماری اشتباه بیشتر از هزینه انتخاب درست است',

      'گاهی کارفرما تصور می‌کند انتخاب معماری فقط یک تصمیم فنی است که تفاوت چندانی در هزینه نهایی ندارد. در پروژه‌های کوچک شاید این تفاوت محدود باشد، اما هرچه محصول بزرگ‌تر و اختصاصی‌تر شود، تصمیم معماری اهمیت بیشتری پیدا می‌کند.',

      'اگر ساختار اولیه مناسب نباشد، ممکن است اضافه کردن یک قابلیت ساده در آینده نیازمند تغییر بخش‌های مختلف سیستم شود. در نتیجه هزینه‌ای که ابتدا برای صرفه‌جویی حذف شده بود، چند برابر به شکل هزینه توسعه مجدد، مهاجرت داده یا تغییر زیرساخت برمی‌گردد.',

      'از طرف دیگر، انتخاب بیش از حد پیچیده نیز می‌تواند هزینه ایجاد کند. پروژه‌ای که می‌توانست با ساختاری ساده و قابل نگهداری اجرا شود، ممکن است به دلیل استفاده از ابزارهای غیرضروری به تیم تخصصی‌تر، سرورهای بیشتر و زمان توسعه طولانی‌تری نیاز پیدا کند.',

      'پس مسئله فقط «ارزان یا گران بودن تکنولوژی» نیست؛ مسئله این است که آیا معماری انتخاب‌شده با ارزش و نیاز واقعی پروژه تناسب دارد یا نه.',

      '## معماری خوب از آینده نمی‌ترسد، اما برای آن هم زیاده‌روی نمی‌کند',

      'یک معماری حرفه‌ای باید بین سه موضوع تعادل برقرار کند: نیازهای امروز، مسیر رشد منطقی و منابعی که واقعاً در اختیار پروژه قرار دارد.',

      'اگر فقط امروز را ببینیم، ممکن است با اولین رشد کسب‌وکار با مشکل مواجه شویم. اگر فقط آینده دور را ببینیم، ممکن است امروز هزینه و پیچیدگی غیرضروری ایجاد کنیم.',

      'هدف، پیدا کردن نقطه تعادل است.',

      'برای همین در طراحی یک سایت حرفه‌ای، قبل از پیشنهاد تکنولوژی یا زیرساخت بهتر است درباره خود کسب‌وکار صحبت کنیم: مشتریان چه کسانی هستند؟ سایت قرار است چه کاری انجام دهد؟ کاربر از چه مسیری وارد می‌شود؟ چه چیزی باید در سایت مدیریت شود؟ احتمال رشد کدام بخش بیشتر است؟ چه امکاناتی واقعاً ضروری هستند و کدام امکانات را می‌توان به آینده موکول کرد؟',

      'پاسخ این سؤال‌ها معمولاً خیلی بیشتر از نام یک فریم‌ورک، درباره معماری مناسب به ما اطلاعات می‌دهد.',

      '## جمع‌بندی',

      'هیچ معماری واحدی وجود ندارد که بتوان آن را برای تمام سایت‌ها بهترین گزینه دانست. وردپرس، توسعه اختصاصی، فریم‌ورک‌های مدرن، سرویس‌های ابری یا حتی یک ساختار بسیار ساده، هرکدام در شرایط خاص خود می‌توانند انتخاب مناسبی باشند.',

      'معماری مناسب معماری‌ای نیست که بیشترین تکنولوژی را در خود داشته باشد؛ معماری‌ای است که با نیاز واقعی کسب‌وکار هماهنگ باشد، هزینه منطقی داشته باشد، نگهداری آن ممکن باشد و برای رشد قابل پیش‌بینی پروژه مسیر مناسبی ایجاد کند.',

      'به همین دلیل اگر قصد ساخت سایت دارید، بهتر است قبل از پرسیدن «با چه تکنولوژی‌ای ساخته می‌شود؟» یک سؤال مهم‌تر بپرسید: «این سایت قرار است دقیقاً چه مسئله‌ای از کسب‌وکار من حل کند؟»',

      'وقتی پاسخ این سؤال روشن باشد، انتخاب معماری نیز بسیار منطقی‌تر و دقیق‌تر خواهد شد.'
    ],

    contentEn: [
      'When a business decides to build a website, one of the first questions is often: “Which technology should we use?” WordPress or custom development? React or Vue? Which server should host the website? Should the project start with a complex multi-layer architecture?',

      'In a professional project, however, these are usually not the first questions. Before choosing a technology, we need to understand the problem the website is supposed to solve. A company website, a large online store, a booking platform, and a SaaS product do not have the same architectural requirements, even if their interfaces may look similar.',

      'Website architecture is essentially the structure that defines how different parts of a web product work together, how data moves through the system, how users interact with it, and how the product can evolve as content, users, or features grow.',

      'That is why good architecture does not necessarily mean the most complicated architecture. Good architecture is architecture that is appropriately sized and structured for the actual problem.',

      '## Understand the business before choosing the technology',

      'One of the common mistakes in website development is choosing technology before understanding the business. A development team may prefer a particular technology because of its previous experience and then try to force the project requirements into that technology.',

      'A more professional approach works in the opposite direction: requirements come first, and the appropriate tools are selected afterward.',

      'For example, a professional website for an individual specialist may focus on a profile, portfolio, articles, contact information, and search visibility. Such a project probably does not need a highly distributed infrastructure with multiple independent services.',

      'Now consider an online store with thousands of products, advanced search, filters, accounts, checkout, orders, and external integrations. Its technical requirements are naturally very different.',

      'The first stage of architecture, therefore, is understanding the product—not choosing a framework.',

      '## What should website architecture consider?',

      'Several factors should be evaluated together: the type of business, number and type of pages, content and data volume, expected users, content management requirements, interactive features, SEO requirements, performance expectations, budget, maintenance capabilities, and the likely growth path of the product.',

      'None of these factors alone determines the final architecture. The right solution usually comes from balancing all of these requirements and constraints.',

      '## A presentation website is not an online store',

      'From the outside, websites may all appear to be collections of pages. Technically, however, they can be very different.',

      'A corporate website may contain service pages, an about page, projects, articles, and contact forms. Content management, performance, SEO, and user experience are important, but the business logic is usually relatively simple.',

      'An online store is different. Products, inventory, pricing, discounts, variants, orders, payments, accounts, and shipping may all depend on one another. As the catalog and order volume grow, the underlying data and workflows become increasingly important.',

      'A booking platform can be even more complex despite having fewer pages, because it may need to manage availability, capacity, existing reservations, cancellation rules, and user states.',

      'Therefore, page count is not a reliable measure of technical complexity. A ten-page application can be far more complex internally than a content website with hundreds of pages.',

      '## When is a simpler architecture better?',

      'When project requirements are simple and well-defined, a lightweight architecture can offer significant advantages. Development is faster, maintenance is cheaper, and the team does not have to maintain infrastructure for requirements that do not yet exist.',

      'A service website, personal website, local business website, or many content-focused websites can be built with a relatively simple but professional architecture.',

      'Simple architecture does not mean poor quality. In fact, unnecessarily complex architecture can increase cost and maintenance without creating meaningful value.',

      'A useful engineering principle is that complexity should be introduced when it solves a real problem, not simply because a particular technology makes it possible.',

      '## When does a project need a more custom architecture?',

      'When a website becomes more than a presentation layer and starts implementing business-specific logic, its architectural requirements change.',

      'User accounts, roles and permissions, custom dashboards, multi-step workflows, multiple API integrations, custom calculations, booking systems, inventory management, complex payments, or large amounts of data can all justify a more customized architecture.',

      'In such projects, the architecture should be designed around the product itself. A generic template or structure may be fast to launch, but if the business logic does not fit it, future development can become unnecessarily difficult and expensive.',

      'The real cost is not only writing new code. It is the cost of modifying a system that was never designed around the actual requirements.',

      '## Do you need to prepare for millions of users from day one?',

      'A common misconception in software architecture is that a small project should start with infrastructure capable of serving millions of users.',

      'If a product currently has a few hundred users, building an extremely complex infrastructure purely for hypothetical future traffic is usually not economically efficient. It increases development and maintenance costs without guaranteeing that the infrastructure will ever be needed.',

      'This does not mean ignoring the future. There is an important difference between designing for growth and overbuilding from day one.',

      'Designing for growth means creating a structure that can be extended when realistic requirements increase, without requiring the entire system to be rebuilt.',

      'A website may initially work perfectly well with a single server and database. If traffic and processing requirements later increase, specific components such as caching, search, file storage, or background processing can be optimized or separated gradually.',

      'This approach is often more reasonable than building every possible component from the beginning.',

      '## The role of architecture in SEO',

      'Website architecture affects more than performance and maintainability. Technical structure can also influence search visibility.',

      'Page generation, URL structure, metadata, internal linking, crawler accessibility, page performance, content rendering, and duplicate content management should all be considered during architecture and design.',

      'This is particularly important for websites that expect meaningful organic traffic from Google. If the architecture makes it difficult to create and organize new pages, content growth can become unnecessarily limited.',

      'SEO therefore should not be treated only as a final step added after development. Some of its foundations are established when the site structure is designed.',

      '## The cost of the wrong architecture',

      'Businesses sometimes assume that architecture is purely a technical decision with little effect on the final budget. For small projects this may be true to some extent, but as a product becomes larger and more customized, architectural decisions become increasingly important.',

      'If the initial structure is unsuitable, adding a seemingly simple feature may require changes across multiple parts of the system. A decision originally made to save money can therefore return later as the cost of redevelopment, data migration, or infrastructure changes.',

      'Overengineering can create costs as well. A project that could have been implemented with a simple, maintainable structure may become dependent on additional services, specialized infrastructure, and a larger development team without a real business benefit.',

      'The question is therefore not simply whether a technology is cheap or expensive. The important question is whether the architecture is appropriate for the actual value and requirements of the project.',

      '## Good architecture prepares for the future without overbuilding',

      'A professional architecture balances three things: today’s requirements, realistic future growth, and the resources actually available to the project.',

      'Focusing only on today can create problems when the business grows. Focusing only on a distant future can create unnecessary cost and complexity today.',

      'The goal is to find the balance.',

      'That is why a professional website project should begin with questions about the business itself: Who are the customers? What should the website accomplish? How will users navigate it? What needs to be managed? Which part is most likely to grow? Which features are truly necessary now, and which can wait until later?', 

      'The answers to these questions usually tell us much more about the appropriate architecture than the name of a framework.',

      '## Conclusion',

      'There is no single architecture that is the best choice for every website. WordPress, custom development, modern frameworks, cloud services, or even a very simple structure can all be appropriate in different situations.',

      'The right architecture is not the one that contains the most technologies. It is the one that matches the real business requirements, has reasonable costs, remains maintainable, and provides a sensible path for predictable growth.',

      'So if you are planning to build a website, instead of asking “Which technology will you use?”, it may be more useful to ask a more important question: “What problem is this website supposed to solve for my business?”',

      'Once that answer is clear, choosing the appropriate architecture becomes much more logical and precise.'
    ]
  },
  {
    slug: 'website-cost-in-iran',
    category: 'راهنمای کسب‌وکار',
    categoryEn: 'Business Guide',
    title: 'هزینه طراحی سایت دقیقاً بابت چه چیزهایی است؟',
    titleEn: 'What are you actually paying for when building a website?',
    excerpt: 'قیمت یک سایت فقط قیمت چند صفحه نیست؛ طراحی، تجربه کاربری، توسعه، سئو، زیرساخت و نگهداری همگی روی نتیجه نهایی اثر دارند.',
    excerptEn: 'A website price is not just the price of a few pages. Design, UX, development, SEO, infrastructure, and maintenance all affect the result.',
    date: '۱۴۰۵/۰۵/۱۴',
    readTime: 6,
    accent: '#38bdf8',
    content: [
      'دو سایت ممکن است از بیرون شبیه هم باشند اما از نظر کیفیت اجرا، سرعت، ساختار کد و قابلیت توسعه تفاوت زیادی داشته باشند.',
      'هزینه منطقی زمانی شکل می‌گیرد که امکانات پروژه، روش اجرا و زیرساخت با نیاز واقعی آن هماهنگ باشند. حذف بخش‌های مهم برای پایین آوردن قیمت، همیشه صرفه‌جویی نیست.',
      'بهترین پیشنهاد لزوماً گران‌ترین پیشنهاد نیست؛ بهترین پیشنهاد همان گزینه‌ای است که بیشترین بازده را نسبت به هدف و بودجه پروژه ایجاد کند.'
    ],
    contentEn: [
      'Two websites can look similar while being very different in implementation quality, speed, code structure, and ability to evolve.',
      'A sensible budget comes from matching features, implementation, and infrastructure to the real needs of the project. Cutting important foundations is not always saving money.',
      'The best proposal is not necessarily the most expensive one. It is the one that produces the strongest return for the project goal and available budget.'
    ]
  },
  {
    slug: 'technical-seo-basics',
    category: 'سئو',
    categoryEn: 'SEO',
    title: 'سئوی تکنیکال چیست و چرا از روز اول مهم است؟',
    titleEn: 'What is technical SEO and why does it matter from day one?',
    excerpt: 'سئو فقط نوشتن مقاله نیست؛ ساختار صفحات، سرعت، ایندکس شدن و تجربه کاربر پایه‌های مهم دیده‌شدن در گوگل هستند.',
    excerptEn: 'SEO is not just writing articles. Page structure, performance, indexing, and user experience form the foundation of search visibility.',
    date: '۱۴۰۵/۰۵/۱۰',
    readTime: 8,
    accent: '#22c55e',
    content: [
      'وقتی ساختار سایت از ابتدا درست طراحی شود، موتورهای جست‌وجو راحت‌تر صفحات را درک و ایندکس می‌کنند و توسعه محتوایی آینده نیز منظم‌تر خواهد بود.',
      'سرعت، متادیتا، ساختار headingها، لینک‌سازی داخلی، URLهای منطقی، داده‌های ساختاریافته و تجربه موبایل بخشی از همین پازل هستند.',
      'سئو یک قابلیت الحاقی نیست که همیشه بتوان آن را در پایان پروژه اضافه کرد. بسیاری از تصمیم‌های فنی از همان مرحله طراحی روی آن اثر می‌گذارند.'
    ],
    contentEn: [
      'When the site structure is planned correctly from the start, search engines can understand and index pages more effectively, while future content remains easier to organize.',
      'Performance, metadata, headings, internal linking, logical URLs, structured data, and mobile experience are all part of the puzzle.',
      'SEO is not merely an add-on for the end of a project. Many technical decisions made during design directly affect it.'
    ]
  },
  {
    slug: 'ui-ux-that-converts',
    category: 'UI/UX',
    categoryEn: 'UI/UX',
    title: 'UI زیبا کافی نیست؛ UX خوب چه کاری انجام می‌دهد؟',
    titleEn: 'A beautiful UI is not enough: what does good UX actually do?',
    excerpt: 'کاربر نباید برای پیدا کردن اطلاعات، خرید یا تماس با شما فکر اضافه‌ای کند. تجربه خوب یعنی مسیر درست، در زمان درست جلوی او باشد.',
    excerptEn: 'Users should not have to think unnecessarily to find information, buy, or contact you. Good UX puts the right path in front of them at the right moment.',
    date: '۱۴۰۵/۰۵/۰۶',
    readTime: 5,
    accent: '#f59e0b',
    content: [
      'رابط کاربری ظاهر محصول است، اما تجربه کاربری چیزی است که کاربر هنگام استفاده از آن احساس و تجربه می‌کند.',
      'در یک سایت فروشگاهی، پیدا کردن محصول، فهمیدن قیمت و ویژگی‌ها و رسیدن به خرید باید طبیعی باشد. در سایت شرکتی نیز کاربر باید سریع متوجه شود شرکت چه کاری انجام می‌دهد و قدم بعدی چیست.',
      'طراحی حرفه‌ای به معنای شلوغ کردن صفحه نیست؛ گاهی بهترین تصمیم حذف یک عنصر اضافه است.'
    ],
    contentEn: [
      'UI is the visible layer of a product, while UX is what the user experiences while using it.',
      'In a store, finding a product, understanding its price and features, and reaching checkout should feel natural. On a company site, the visitor should quickly understand what the company does and what to do next.',
      'Professional design does not mean adding more elements. Sometimes the best design decision is removing one.'
    ]
  },
  {
    slug: 'wordpress-vs-custom-development',
    category: 'توسعه وب',
    categoryEn: 'Web Development',
    title: 'وردپرس یا توسعه اختصاصی؟ کدام بهتر است؟',
    titleEn: 'WordPress or custom development: which is better?',
    excerpt: 'پاسخ درست برای هر پروژه متفاوت است. انتخاب باید بر اساس نیاز، بودجه، سرعت اجرا، مدیریت محتوا و آینده محصول باشد.',
    excerptEn: 'The right answer depends on the project. The decision should consider requirements, budget, delivery speed, content management, and the product roadmap.',
    date: '۱۴۰۵/۰۵/۰۲',
    readTime: 7,
    accent: '#ec4899',
    content: [
      'وردپرس برای بسیاری از سایت‌های محتوایی، شرکتی و فروشگاهی انتخاب بسیار مناسبی است؛ مخصوصاً زمانی که مدیریت محتوا و سرعت راه‌اندازی اهمیت زیادی دارد.',
      'توسعه اختصاصی زمانی ارزش بیشتری پیدا می‌کند که منطق محصول، فرایندها یا نیازهای فنی از قالب سایت‌های معمولی فراتر برود.',
      'هیچ تکنولوژی به‌خودی‌خود حرفه‌ای‌تر نیست. حرفه‌ای بودن یعنی ابزار مناسب را برای مسئله مناسب انتخاب کنیم.'
    ],
    contentEn: [
      'WordPress is an excellent choice for many content, company, and commerce websites, especially when content management and fast delivery matter.',
      'Custom development becomes more valuable when product logic, workflows, or technical requirements go beyond typical website patterns.',
      'No technology is inherently more professional. Professional work means choosing the right tool for the actual problem.'
    ]
  },
  {
    slug: 'website-speed',
    category: 'سرعت و عملکرد',
    categoryEn: 'Performance',
    title: 'چرا سرعت سایت مستقیماً روی کسب‌وکار اثر می‌گذارد؟',
    titleEn: 'Why website performance directly affects your business',
    excerpt: 'کاربر منتظر سایت شما نمی‌ماند. عملکرد خوب فقط یک ویژگی فنی نیست؛ بخشی از تجربه مشتری و اعتبار برند است.',
    excerptEn: 'Users do not wait forever. Performance is not just a technical feature; it is part of customer experience and brand credibility.',
    date: '۱۴۰۴/۱۲/۲۸',
    readTime: 6,
    accent: '#06b6d4',
    content: [
      'سرعت سایت نتیجه مجموعه‌ای از تصمیم‌هاست: تصاویر، فونت‌ها، کدهای فرانت‌اند، کش، سرور و نحوه دریافت داده‌ها همگی مهم هستند.',
      'بهینه‌سازی نباید فقط بعد از کند شدن سایت شروع شود. معماری و طراحی درست می‌توانند از ابتدا جلوی بخش بزرگی از مشکلات عملکردی را بگیرند.',
      'هدف، سریع بودن به‌عنوان یک عدد نیست؛ هدف این است که کاربر سریع و بدون اصطکاک به چیزی که برایش آمده برسد.'
    ],
    contentEn: [
      'Performance is the result of many decisions: images, fonts, frontend code, caching, servers, and data fetching all matter.',
      'Optimization should not begin only after a site becomes slow. Good architecture and design prevent many performance problems from the beginning.',
      'The goal is not simply a good speed score. The goal is helping the user reach what they came for quickly and without friction.'
    ]
  }
]

export const getArticle = (slug: string) => articles.find(article => article.slug === slug)
