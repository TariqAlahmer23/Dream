export type Language = "en" | "ar"

type Section = { id: string; label: string }
type Cta = { label: string; href: string }
type ProblemCard = { title: string; description: string }
type TechnicalPath = {
  label?: string
  title: string
  summary: string
  shortDefinition?: string
  distinctionTitle?: string
  distinctionLevels?: string[]
  howItWorks?: string[]
  strengths?: string[]
  weaknesses?: string[]
  verdictLabel?: string
  bestUse?: string
  points: string[]
  highlight: boolean
}
type DataStat = { label: string; value: string }
type DatasetFile = { name: string }
type DecisionRow = { criterion: string; rag: string; custom: string }
type ArchitectureNode = { title: string; description: string }
type RoadmapPhase = { phase: string; title: string; description: string; track: "now" | "later" }

export type PresentationContent = {
  dir: "ltr" | "rtl"
  languageLabel: { en: string; ar: string }
  sections: Section[]
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    supportingLine: string
    visualQuote: string
    primaryCta: Cta
    secondaryCta: Cta
  }
  problem: {
    eyebrow: string
    title: string
    subtitle: string
    cards: ProblemCard[]
  }
  paths: {
    eyebrow: string
    title: string
    subtitle: string
    selectedBadge: string
    items: TechnicalPath[]
  }
  data: {
    eyebrow: string
    title: string
    subtitle: string
    mainExplanation: string
    stats: DataStat[]
    filesTitle: string
    files: DatasetFile[]
    ragReadyTitle: string
    ragReady: string[]
    notTrainingReadyTitle: string
    notTrainingReady: string[]
    noteTitle: string
    conclusion: string
  }
  whyRag: {
    eyebrow: string
    title: string
    subtitle: string
    mainExplanation: string
    selectedBadge: string
    matrixTitle: string
    matrix: DecisionRow[]
    conclusion: string
  }
  architecture: {
    eyebrow: string
    title: string
    subtitle: string
    flowTitle: string
    flow: ArchitectureNode[]
    stackTitle: string
    stack: string[]
  }
  roadmap: {
    eyebrow: string
    title: string
    subtitle: string
    nowLabel: string
    laterLabel: string
    phases: RoadmapPhase[]
  }
  finalDecision: {
    title: string
    mainStatement: string
    selectedPathLabel: string
    selectedPathValue: string
    reasonLabel: string
    reason: string
    detailedConclusion: string
    futureLabel: string
    futureDirection: string
    finalLine: string
    selectedBadge: string
    futureBadge: string
    ctaPrimary: Cta
    ctaSecondary: Cta
  }
}

export const contentByLanguage: Record<Language, PresentationContent> = {
  en: {
    dir: "ltr",
    languageLabel: { en: "EN", ar: "AR" },
    sections: [
      { id: "hero", label: "Cover" },
      { id: "problem", label: "Problem" },
      { id: "paths", label: "Paths" },
      { id: "data", label: "Data" },
      { id: "why-rag", label: "Why RAG" },
      { id: "architecture", label: "Architecture" },
      { id: "roadmap", label: "Roadmap" },
      { id: "decision", label: "Decision" },
    ],
    hero: {
      eyebrow: "Investor Strategy Deck",
      title: "AI Dream Interpretation System",
      subtitle:
        "A source-grounded interpretation engine that transforms classical and symbolic dream interpretation books into a reliable AI-assisted experience.",
      supportingLine:
        "The goal is not to predict the future. The goal is to provide structured, source-based, probabilistic interpretations from selected traditions.",
      visualQuote: "Structured interpretations grounded in selected trusted traditions",
      primaryCta: { label: "Explore the Strategy", href: "#paths" },
      secondaryCta: { label: "View Data Assessment", href: "#data" },
    },
    problem: {
      eyebrow: "Core Challenge",
      title: "The Challenge",
      subtitle:
        "Dream interpretation crosses religion, culture, psychology, and personal belief. A useful AI system must be careful, source-based, and safe.",
      cards: [
        {
          title: "Interpretation Is Sensitive",
          description:
            "Dreams can carry religious, cultural, emotional, and psychological meanings. The system must avoid presenting interpretations as facts or future predictions.",
        },
        {
          title: "Trust Depends on Sources",
          description:
            "The AI must not invent interpretations or falsely attribute statements to known interpreters. The source must lead the answer.",
        },
        {
          title: "Context Changes Meaning",
          description:
            "The same symbol can carry different meanings depending on the dream context, the user’s emotional state, and the selected interpretation tradition.",
        },
        {
          title: "Safety Comes First",
          description:
            "If a dream suggests distress, trauma, self-harm, severe anxiety, or fear, the system should respond supportively and avoid fatalistic or frightening interpretations.",
        },
      ],
    },
    paths: {
      eyebrow: "Two Technical Paths",
      title: "Evaluate speed, risk, and long-term quality",
      subtitle: "Both paths are viable in theory, but only one fits our data reality and delivery timeline right now.",
      selectedBadge: "Selected",
      items: [
        {
          label: "Path 01",
          title: "RAG + LLM",
          summary: "A retrieval-first architecture for grounded interpretation.",
          shortDefinition:
            "A Retrieval-Augmented Generation system connects the LLM to a trusted knowledge base. Instead of asking the model to rely on memory, the system retrieves relevant passages from the selected sources and gives them to the LLM before generating the answer.",
          howItWorks: [
            "The user writes a dream.",
            "The system extracts symbols, actions, emotions, people, and places.",
            "The user selects a source or interpretation school.",
            "The retriever searches the indexed books.",
            "Relevant passages are passed to the LLM.",
            "The LLM writes a grounded interpretation.",
            "A safety layer checks the answer before showing it.",
          ],
          strengths: [
            "Fast path to MVP",
            "Lower cost than training",
            "Uses existing books directly",
            "Easier to cite and audit sources",
            "Easier to add new interpreters later",
            "Better fit for raw book data",
            "Lower hallucination risk when retrieval is controlled",
          ],
          weaknesses: [
            "Requires careful data cleaning",
            "Retrieval quality must be tested",
            "Bad chunking can produce weak answers",
            "Needs a strong safety and attribution layer",
            "The LLM can still hallucinate if prompts and constraints are weak",
          ],
          bestUse:
            "This is the strongest first architecture when the available data is trusted source material rather than labeled training examples.",
          points: [
            "Fast time-to-value with existing raw books data",
            "Reference-backed answers with citation pathways",
            "Improves over time through chunking, metadata, and safety layers",
          ],
          highlight: true,
        },
        {
          label: "Path 02",
          title: "Custom Model / Training from Scratch",
          summary: "A dedicated-model path with high long-term potential but low near-term feasibility.",
          shortDefinition:
            "This path means building or heavily training a dedicated model for dream interpretation. In theory, the model could learn the language, structure, and style of dream interpretation. In practice, this requires large supervised datasets, GPUs, ML infrastructure, and a strong evaluation pipeline.",
          distinctionTitle: "Important Distinction",
          distinctionLevels: [
            "1. Training from scratch: Building a language model from the ground up. This is not realistic for the current project.",
            "2. Fine-tuning: Adapting an existing model using structured dream interpretation examples. This may be useful later.",
            "3. Fine-tuning + RAG: A future hybrid approach where fine-tuning controls style and structure, while RAG provides source-grounded knowledge.",
          ],
          strengths: [
            "More control over answer style after enough data",
            "Potential for a specialized product identity",
            "Could reduce long-term API dependency",
            "Useful later if we collect real user dreams and expert-reviewed answers",
          ],
          weaknesses: [
            "Too expensive for the current stage",
            "Current dataset is not supervised training data",
            "Requires thousands of structured dream-to-answer examples",
            "Harder to cite exact source passages",
            "Higher hallucination risk if not grounded",
            "Difficult to update with new sources",
            "Requires ML engineering, evaluation, and infrastructure",
          ],
          verdictLabel: "Not Now / Later",
          bestUse:
            "Training from scratch is not a smart first move. Fine-tuning may become useful later, but only after collecting structured examples and user feedback.",
          points: [
            "Requires large labeled pairs unavailable today",
            "Longer R&D cycle and higher compute cost",
            "Harder to guarantee source-level traceability early",
          ],
          highlight: false,
        },
      ],
    },
    data: {
      eyebrow: "Data Assessment",
      title: "What the Data Tells Us",
      subtitle:
        "The dataset is a strong knowledge base, but not a supervised training dataset.",
      mainExplanation:
        "The files contain raw book-based knowledge. They are organized as text records, pages, chapters, and content sections. This makes them suitable for retrieval, indexing, chunking, and source-grounded generation. However, they do not contain structured examples of user dreams mapped to final interpretations.",
      stats: [
        { label: "Books", value: "7" },
        { label: "Records", value: "2,580" },
        { label: "Characters", value: "~4.3M" },
        { label: "Source Format", value: "JSON" },
      ],
      filesTitle: "Inspected Files",
      files: [
        { name: "taaber_alroya_10696.json" },
        { name: "abdul_ghani_alnabulsi_1217.json" },
        { name: "abu_bakr_almala_alahsayiyi_10652.json" },
        { name: "albadr_almunir_10703.json" },
        { name: "gustavus_hindman_miller_230.json" },
        { name: "ibn_sirin_21615.json" },
        { name: "khalil_alzahiri_9968.json" },
      ],
      ragReadyTitle: "RAG-ready",
      ragReady: [
        "Source texts are available",
        "Chapter titles are available",
        "Content can be chunked",
        "Books can be separated by author/source",
        "Passages can be retrieved at runtime",
        "Answers can reference the selected source",
        "Interpreter-specific responses are possible",
      ],
      notTrainingReadyTitle: "Not training-ready",
      notTrainingReady: [
        "No user dream examples",
        "No labeled dream-to-answer pairs",
        "No structured symbol annotations yet",
        "No expert-reviewed outputs",
        "No preference data",
        "Not enough scale for training from scratch",
      ],
      noteTitle: "Important Note",
      conclusion:
        "The current dataset gives us knowledge, not behavior. RAG can use this knowledge immediately. A trained model would require behavioral examples.",
    },
    whyRag: {
      eyebrow: "Decision Matrix",
      title: "Why RAG Is the Correct First Decision",
      subtitle: "Because the available data is source-heavy, not example-heavy.",
      mainExplanation:
        "RAG is the natural architecture when the available material consists of trusted reference books. The system does not need to memorize every interpretation. It needs to retrieve the most relevant passages, understand the dream context, and generate a careful answer grounded in the selected source.",
      selectedBadge: "Selected Path: RAG + LLM",
      matrixTitle: "Decision Matrix",
      matrix: [
        { criterion: "Fit with current dataset", rag: "Excellent", custom: "Weak" },
        { criterion: "Speed to MVP", rag: "Fast", custom: "Slow" },
        { criterion: "Source citation", rag: "Strong", custom: "Weak" },
        { criterion: "Cost", rag: "Manageable", custom: "High" },
        { criterion: "Hallucination control", rag: "Better with retrieval constraints", custom: "Riskier without grounding" },
        { criterion: "Adding new interpreters", rag: "Easy", custom: "Requires retraining or additional tuning" },
        { criterion: "Long-term ownership", rag: "Good", custom: "Better later, but not now" },
      ],
      conclusion:
        "The correct path is not to force the current dataset into model training. The correct path is to transform it into a trusted retrieval layer.",
    },
    architecture: {
      eyebrow: "Architecture",
      title: "Recommended Architecture",
      subtitle: "A source-grounded pipeline from dream input to safe interpretation.",
      flowTitle: "Architecture Flow",
      flow: [
        { title: "User Dream", description: "The user writes the dream in natural language." },
        {
          title: "Dream Parser",
          description:
            "The system extracts symbols, actions, emotions, people, places, colors, and repeated elements.",
        },
        { title: "Source Selection", description: "The user chooses a specific interpreter or tradition." },
        {
          title: "Retrieval Engine",
          description: "The system searches the indexed books and retrieves the most relevant passages.",
        },
        {
          title: "LLM Grounded Answer",
          description:
            "The LLM receives the dream, selected source, and retrieved passages, then writes a structured interpretation.",
        },
        {
          title: "Safety Layer",
          description:
            "The answer is checked for harmful claims, fatalism, false certainty, or distress-related risk.",
        },
        {
          title: "Final Response",
          description:
            "The user receives a careful interpretation with uncertainty language and source-based reasoning.",
        },
      ],
      stackTitle: "Suggested Stack",
      stack: [
        "Frontend: React for web, Flutter possible later",
        "Backend: Django or FastAPI",
        "Database: PostgreSQL",
        "Vector Search: pgvector or Qdrant",
        "Embeddings: bge-m3 or multilingual-e5",
        "LLM: GPT, Claude, Gemini, DeepSeek, or Llama depending on quality and cost",
        "Safety: rule-based checks plus LLM-based guardrails",
      ],
    },
    roadmap: {
      eyebrow: "Roadmap",
      title: "Implementation Roadmap",
      subtitle: "Build the reliable system first. Train later only when the right data exists.",
      nowLabel: "Now",
      laterLabel: "Later",
      phases: [
        {
          phase: "Phase 1",
          title: "Data Cleaning & Normalization",
          description:
            "Clean the JSON books, standardize fields, remove noise, and preserve original source metadata.",
          track: "now",
        },
        {
          phase: "Phase 2",
          title: "Metadata Layer",
          description:
            "Add book name, author, tradition, chapter title, page number, source type, and confidence/trust level.",
          track: "now",
        },
        {
          phase: "Phase 3",
          title: "Chunking Strategy",
          description: "Split long content into meaningful passages that preserve interpretation context.",
          track: "now",
        },
        {
          phase: "Phase 4",
          title: "Symbol Index",
          description:
            "Build a symbol dictionary: snake, sea, fire, water, house, death, marriage, travel, animals, colors, illness, money, and more.",
          track: "now",
        },
        {
          phase: "Phase 5",
          title: "Vector Search",
          description: "Generate embeddings and store chunks in pgvector or Qdrant for semantic retrieval.",
          track: "now",
        },
        {
          phase: "Phase 6",
          title: "Interpretation API",
          description: "Create an endpoint that receives the dream, selected source, language, and response style.",
          track: "now",
        },
        {
          phase: "Phase 7",
          title: "Safety & Attribution",
          description:
            "Add safeguards against certainty, fatalism, harmful advice, and false source attribution.",
          track: "now",
        },
        {
          phase: "Phase 8",
          title: "Evaluation",
          description:
            "Test the system with sample dreams and evaluate retrieval quality, answer grounding, safety, and user clarity.",
          track: "now",
        },
        {
          phase: "Phase 9",
          title: "User Feedback Loop",
          description: "Collect ratings, corrections, and preferred interpretations.",
          track: "now",
        },
        {
          phase: "Phase 10",
          title: "Optional Fine-tuning",
          description:
            "Only after collecting structured dream-to-answer examples, fine-tune a model for style and answer structure.",
          track: "later",
        },
      ],
    },
    finalDecision: {
      title: "Final Technical Decision",
      mainStatement: "Do not train from scratch now.",
      selectedPathLabel: "Selected path",
      selectedPathValue: "RAG + LLM",
      reasonLabel: "Reason",
      reason:
        "The inspected data is ideal for retrieval and source-grounded generation. It is not sufficient for training a reliable standalone model.",
      detailedConclusion:
        "The current JSON books provide a strong knowledge foundation. They should be cleaned, chunked, indexed, and connected to an LLM through a retrieval pipeline. This gives the product a faster MVP, stronger source control, better auditability, and a safer path to user trust.",
      futureLabel: "Future direction",
      futureDirection:
        "After collecting real user dreams, structured interpretations, expert review, ratings, and safety evaluations, fine-tuning can be considered. But the core knowledge layer should remain retrieval-based because source attribution is essential to the product.",
      finalLine: "Build the knowledge engine first. Train the model later, only when the data justifies it.",
      selectedBadge: "Selected Path: RAG + LLM",
      futureBadge: "Future: Fine-tuning after real data",
      ctaPrimary: { label: "Start Building the RAG MVP", href: "#roadmap" },
      ctaSecondary: { label: "View Roadmap", href: "#roadmap" },
    },
  },
  ar: {
    dir: "rtl",
    languageLabel: { en: "EN", ar: "AR" },
    sections: [
      { id: "hero", label: "الغلاف" },
      { id: "problem", label: "التحدي" },
      { id: "paths", label: "المسارات" },
      { id: "data", label: "البيانات" },
      { id: "why-rag", label: "لماذا RAG" },
      { id: "architecture", label: "المعمارية" },
      { id: "roadmap", label: "خارطة الطريق" },
      { id: "decision", label: "القرار" },
    ],
    hero: {
      eyebrow: "عرض استراتيجي للمستثمرين",
      title: "نظام ذكاء اصطناعي لتفسير الأحلام",
      subtitle:
        "محرك تفسير مبني على المصادر، يحوّل كتب تفسير الأحلام التراثية والرمزية إلى تجربة ذكية موثوقة ومدعومة بالمراجع.",
      supportingLine:
        "الهدف ليس التنبؤ بالمستقبل، بل تقديم تفسير احتمالي ومنظم ومبني على مصادر يختارها المستخدم.",
      visualQuote: "تفسير احتمالي حذر مدعوم بمصادر يختارها المستخدم",
      primaryCta: { label: "استكشف الاستراتيجية", href: "#paths" },
      secondaryCta: { label: "عرض تحليل البيانات", href: "#data" },
    },
    problem: {
      eyebrow: "التحدي الجوهري",
      title: "التحدي",
      subtitle:
        "تفسير الأحلام يلامس الدين، والثقافة، والنفس، والمعتقد الشخصي. لذلك لا يكفي أن يكون النظام ذكيًا؛ يجب أن يكون حذرًا، موثقًا، وآمنًا.",
      cards: [
        {
          title: "التفسير مجال حساس",
          description:
            "الأحلام قد تحمل معاني دينية أو ثقافية أو نفسية أو عاطفية. لذلك يجب ألا يعرض النظام التفسير كحقيقة قطعية أو كتنبؤ بالمستقبل.",
        },
        {
          title: "الثقة تبدأ من المصدر",
          description:
            "لا يجوز للذكاء الاصطناعي أن يخترع تفسيرًا أو ينسب كلامًا لمفسر معروف دون مرجع. يجب أن تقود المصادر الجواب لا الخيال.",
        },
        {
          title: "السياق يغيّر المعنى",
          description:
            "الرمز الواحد قد يختلف معناه بحسب سياق الحلم، وشعور المستخدم، والتقليد التفسيري المختار.",
        },
        {
          title: "السلامة أولًا",
          description:
            "إذا كان الحلم يشير إلى ضيق شديد، أو صدمة، أو إيذاء للنفس، أو قلق حاد، يجب أن يرد النظام بلغة داعمة وآمنة بدل التفسيرات المخيفة أو الحتمية.",
        },
      ],
    },
    paths: {
      eyebrow: "مساران تقنيان",
      title: "مقارنة السرعة والمخاطر وجودة المخرجات",
      subtitle: "كلا المسارين ممكن نظريًا، لكن مسارًا واحدًا فقط ينسجم مع واقع البيانات والجدول التنفيذي الحالي.",
      selectedBadge: "المسار المعتمد",
      items: [
        {
          label: "المسار 01",
          title: "نظام RAG مع LLM",
          summary: "معمارية استرجاع أولًا لتفسير مدعوم بالمصادر.",
          shortDefinition:
            "نظام RAG يربط نموذج اللغة بقاعدة معرفة موثوقة. بدل أن يعتمد النموذج على ذاكرته أو تخمينه، يقوم النظام باسترجاع المقاطع المناسبة من المصادر المختارة ثم يمررها إلى LLM ليبني الجواب عليها.",
          howItWorks: [
            "يكتب المستخدم حلمه.",
            "يستخرج النظام الرموز، الأفعال، المشاعر، الأشخاص، والأماكن.",
            "يختار المستخدم المفسر أو المدرسة التفسيرية.",
            "يبحث نظام الاسترجاع داخل الكتب المفهرسة.",
            "تُمرر المقاطع المناسبة إلى LLM.",
            "يصيغ LLM تفسيرًا مبنيًا على المصادر.",
            "تمر الإجابة على طبقة سلامة قبل عرضها للمستخدم.",
          ],
          strengths: [
            "أسرع طريق لبناء MVP",
            "أقل تكلفة من التدريب",
            "يستخدم الكتب الموجودة مباشرة",
            "أسهل في ذكر المصدر ومراجعته",
            "أسهل في إضافة مفسرين جدد لاحقًا",
            "أنسب للداتا الحالية لأنها كتب خام",
            "يقلل الهلوسة إذا كان الاسترجاع مضبوطًا",
          ],
          weaknesses: [
            "يحتاج تنظيف داتا دقيق",
            "جودة الاسترجاع يجب اختبارها",
            "تقسيم النصوص بشكل سيئ يعطي نتائج ضعيفة",
            "يحتاج طبقة سلامة ونَسب للمصادر",
            "يمكن أن يهلوس LLM إذا كانت القيود والبرومبتات ضعيفة",
          ],
          bestUse:
            "هذا هو الخيار الأقوى كبداية عندما تكون الداتا المتوفرة مصادر معرفية موثوقة وليست أمثلة تدريبية معنونة.",
          points: [
            "قيمة تنفيذية سريعة بالاعتماد على البيانات الحالية",
            "إجابات مرتبطة بالمصادر مع إمكانية الإسناد",
            "تحسن تدريجي عبر التقسيم والبيانات الوصفية وطبقات السلامة",
          ],
          highlight: true,
        },
        {
          label: "المسار 02",
          title: "نموذج مخصص / تدريب من الصفر",
          summary: "مسار جاد بإمكانات مستقبلية، لكنه منخفض الجدوى في المرحلة الحالية.",
          shortDefinition:
            "هذا المسار يعني بناء أو تدريب نموذج متخصص في تفسير الأحلام. نظريًا، يمكن للنموذج أن يتعلم لغة التفسير وبنيته وأسلوبه. عمليًا، هذا يحتاج داتا تدريب منظمة وكبيرة، وبطاقات GPU، وبنية ML، ونظام تقييم قوي.",
          distinctionTitle: "تمييز مهم",
          distinctionLevels: [
            "1. التدريب من الصفر: بناء نموذج لغوي من البداية. هذا غير واقعي حاليًا لهذا المشروع.",
            "2. الضبط الدقيق Fine-tuning: تعديل نموذج جاهز باستخدام أمثلة منظمة من نوع حلم → تفسير. هذا قد يكون مفيدًا لاحقًا.",
            "3. Fine-tuning + RAG: نهج هجين مستقبلي، حيث يتحكم الضبط الدقيق في الأسلوب والبنية، بينما يوفر RAG المعرفة الموثقة بالمصادر.",
          ],
          strengths: [
            "تحكم أكبر في أسلوب الإجابة بعد توفر داتا كافية",
            "إمكانية بناء هوية تقنية خاصة للمنتج",
            "قد يقلل الاعتماد على API خارجي على المدى الطويل",
            "مفيد لاحقًا إذا جمعنا أحلامًا حقيقية وإجابات مراجعة من خبراء",
          ],
          weaknesses: [
            "مكلف جدًا في هذه المرحلة",
            "الداتا الحالية ليست داتا تدريب إشرافية",
            "يحتاج آلاف الأمثلة المنظمة من حلم إلى تفسير",
            "أصعب في ذكر المقاطع المصدرية بدقة",
            "خطر الهلوسة أعلى إذا لم يكن مربوطًا بالمصادر",
            "تحديثه بمصادر جديدة أصعب",
            "يحتاج خبرة ML وتقييم وبنية تشغيل",
          ],
          verdictLabel: "ليس الآن / لاحقًا",
          bestUse:
            "التدريب من الصفر ليس قرارًا ذكيًا كبداية. الضبط الدقيق قد يصبح مفيدًا لاحقًا، لكن بعد جمع أمثلة منظمة وتقييمات حقيقية من المستخدمين.",
          points: [
            "يتطلب بيانات موسومة كبيرة غير متوفرة حاليًا",
            "زمن بحث وتطوير أطول وتكلفة حوسبة أعلى",
            "صعوبة أعلى في ضمان الإسناد المباشر للمصادر في المراحل المبكرة",
          ],
          highlight: false,
        },
      ],
    },
    data: {
      eyebrow: "تقييم البيانات",
      title: "ماذا تخبرنا البيانات؟",
      subtitle: "الداتا قوية كقاعدة معرفة، لكنها ليست داتا تدريب إشرافية.",
      mainExplanation:
        "الملفات تحتوي على معرفة خام مأخوذة من كتب. هي منظمة كسجلات نصية وصفحات وأبواب ومقاطع محتوى. هذا يجعلها مناسبة للاسترجاع والفهرسة والتقسيم والربط بالمصادر. لكنها لا تحتوي على أمثلة منظمة من نوع: حلم يكتبه المستخدم → تفسير نهائي.",
      stats: [
        { label: "الكتب", value: "7" },
        { label: "السجلات", value: "2,580" },
        { label: "عدد المحارف", value: "~4.3M" },
        { label: "صيغة المصدر", value: "JSON" },
      ],
      filesTitle: "الملفات التي تم فحصها",
      files: [
        { name: "taaber_alroya_10696.json" },
        { name: "abdul_ghani_alnabulsi_1217.json" },
        { name: "abu_bakr_almala_alahsayiyi_10652.json" },
        { name: "albadr_almunir_10703.json" },
        { name: "gustavus_hindman_miller_230.json" },
        { name: "ibn_sirin_21615.json" },
        { name: "khalil_alzahiri_9968.json" },
      ],
      ragReadyTitle: "جاهزة لـ RAG",
      ragReady: [
        "النصوص المصدرية موجودة",
        "عناوين الأبواب موجودة",
        "يمكن تقسيم المحتوى إلى مقاطع",
        "يمكن فصل الكتب حسب المؤلف أو المصدر",
        "يمكن استرجاع المقاطع المناسبة وقت الطلب",
        "يمكن ربط الإجابة بالمصدر المختار",
        "يمكن دعم تفسير خاص بكل مفسر",
      ],
      notTrainingReadyTitle: "غير جاهزة للتدريب",
      notTrainingReady: [
        "لا توجد أمثلة لأحلام المستخدمين",
        "لا توجد أزواج معنونة من حلم إلى جواب",
        "لا توجد ترميزات منظمة للرموز حتى الآن",
        "لا توجد إجابات مراجعة من خبراء",
        "لا توجد بيانات تفضيل أو تقييم",
        "الحجم غير كافٍ للتدريب من الصفر",
      ],
      noteTitle: "ملاحظة مهمة",
      conclusion:
        "الداتا الحالية تعطينا معرفة، لا تعطينا سلوك نموذج. RAG يستطيع استخدام هذه المعرفة مباشرة، أما تدريب نموذج فيحتاج أمثلة سلوكية منظمة.",
    },
    whyRag: {
      eyebrow: "مصفوفة القرار",
      title: "لماذا RAG هو القرار الصحيح أولًا؟",
      subtitle: "لأن الداتا المتوفرة غنية بالمصادر، وليست غنية بأمثلة التدريب.",
      mainExplanation:
        "RAG هو البنية الطبيعية عندما تكون المادة المتوفرة عبارة عن كتب ومراجع موثوقة. النظام لا يحتاج أن يحفظ كل تفسير داخل النموذج. ما يحتاجه هو استرجاع المقاطع المناسبة، فهم سياق الحلم، ثم صياغة جواب حذر مبني على المصدر المختار.",
      selectedBadge: "المسار المختار: RAG + LLM",
      matrixTitle: "مصفوفة القرار",
      matrix: [
        { criterion: "التوافق مع الداتا الحالية", rag: "ممتاز", custom: "ضعيف" },
        { criterion: "سرعة بناء MVP", rag: "سريع", custom: "بطيء" },
        { criterion: "ذكر المصادر", rag: "قوي", custom: "ضعيف" },
        { criterion: "التكلفة", rag: "قابلة للإدارة", custom: "عالية" },
        { criterion: "التحكم بالهلوسة", rag: "أفضل مع قيود الاسترجاع", custom: "أكثر خطورة دون grounding" },
        { criterion: "إضافة مفسرين جدد", rag: "سهلة", custom: "تحتاج تدريبًا أو ضبطًا إضافيًا" },
        { criterion: "الملكية التقنية طويلة المدى", rag: "جيدة", custom: "أفضل لاحقًا، لكن ليس الآن" },
      ],
      conclusion:
        "القرار الصحيح ليس إجبار الداتا الحالية على التدريب. القرار الصحيح هو تحويلها إلى طبقة استرجاع معرفي موثوقة.",
    },
    architecture: {
      eyebrow: "المعمارية",
      title: "البنية التقنية المقترحة",
      subtitle: "مسار مبني على المصادر، من إدخال الحلم إلى تفسير آمن ومنظم.",
      flowTitle: "تدفق المعمارية",
      flow: [
        { title: "حلم المستخدم", description: "يكتب المستخدم حلمه بلغة طبيعية." },
        {
          title: "محلل الحلم",
          description: "يستخرج النظام الرموز، الأفعال، المشاعر، الأشخاص، الأماكن، الألوان، والعناصر المتكررة.",
        },
        { title: "اختيار المصدر", description: "يختار المستخدم المفسر أو المدرسة التفسيرية." },
        { title: "محرك الاسترجاع", description: "يبحث النظام داخل الكتب المفهرسة ويسترجع المقاطع الأكثر صلة." },
        {
          title: "إجابة LLM مبنية على المصدر",
          description: "يتلقى LLM الحلم، والمصدر المختار، والمقاطع المسترجعة، ثم يصيغ تفسيرًا منظمًا.",
        },
        {
          title: "طبقة السلامة",
          description: "تُفحص الإجابة لمنع الادعاءات المؤذية، والحتمية، واليقين الزائف، أو المخاطر النفسية.",
        },
        {
          title: "الرد النهائي",
          description: "يحصل المستخدم على تفسير حذر يستخدم لغة احتمالية ويشرح منطقه بناءً على المصدر.",
        },
      ],
      stackTitle: "المنظومة المقترحة",
      stack: [
        "الواجهة: React للويب، وFlutter ممكن لاحقًا",
        "الباكند: Django أو FastAPI",
        "قاعدة البيانات: PostgreSQL",
        "البحث المتجهي: pgvector أو Qdrant",
        "التضمينات: bge-m3 أو multilingual-e5",
        "نموذج اللغة: GPT أو Claude أو Gemini أو DeepSeek أو Llama حسب الجودة والتكلفة",
        "السلامة: قواعد ثابتة مع حواجز حماية مبنية على LLM",
      ],
    },
    roadmap: {
      eyebrow: "خارطة الطريق",
      title: "خارطة التنفيذ",
      subtitle: "نبني النظام الموثوق أولًا، ثم نفكر بالتدريب لاحقًا عندما تتوفر الداتا المناسبة.",
      nowLabel: "الآن",
      laterLabel: "لاحقًا",
      phases: [
        {
          phase: "المرحلة 1",
          title: "تنظيف البيانات وتوحيدها",
          description:
            "تنظيف كتب JSON، توحيد الحقول، إزالة الضجيج، والحفاظ على معلومات المصدر الأصلية.",
          track: "now",
        },
        {
          phase: "المرحلة 2",
          title: "طبقة البيانات الوصفية",
          description:
            "إضافة اسم الكتاب، المؤلف، المدرسة التفسيرية، عنوان الباب، رقم الصفحة، نوع المصدر، ومستوى الثقة.",
          track: "now",
        },
        {
          phase: "المرحلة 3",
          title: "استراتيجية تقسيم النصوص",
          description: "تقسيم المحتوى الطويل إلى مقاطع ذات معنى تحافظ على سياق التفسير.",
          track: "now",
        },
        {
          phase: "المرحلة 4",
          title: "فهرس الرموز",
          description:
            "بناء قاموس رموز مثل: الثعبان، البحر، النار، الماء، البيت، الموت، الزواج، السفر، الحيوانات، الألوان، المرض، المال، وغيرها.",
          track: "now",
        },
        {
          phase: "المرحلة 5",
          title: "البحث المتجهي",
          description: "توليد embeddings وتخزين المقاطع في pgvector أو Qdrant للاسترجاع الدلالي.",
          track: "now",
        },
        {
          phase: "المرحلة 6",
          title: "واجهة تفسير API",
          description: "إنشاء endpoint يستقبل الحلم، والمصدر المختار، واللغة، وأسلوب الرد.",
          track: "now",
        },
        {
          phase: "المرحلة 7",
          title: "السلامة ونسبة المصادر",
          description:
            "إضافة حواجز تمنع اليقين الزائف، والحتمية، والنصائح المؤذية، ونسبة الكلام لمصدر غير صحيح.",
          track: "now",
        },
        {
          phase: "المرحلة 8",
          title: "التقييم",
          description:
            "اختبار النظام بأحلام تجريبية وتقييم جودة الاسترجاع، وارتباط الإجابة بالمصدر، والسلامة، ووضوح الرد.",
          track: "now",
        },
        {
          phase: "المرحلة 9",
          title: "حلقة ملاحظات المستخدمين",
          description: "جمع التقييمات، والتصحيحات، والتفضيلات.",
          track: "now",
        },
        {
          phase: "المرحلة 10",
          title: "Fine-tuning اختياري",
          description:
            "فقط بعد جمع أمثلة منظمة من حلم إلى جواب، يمكن ضبط نموذج لتحسين الأسلوب وبنية الإجابة.",
          track: "later",
        },
      ],
    },
    finalDecision: {
      title: "القرار التقني النهائي",
      mainStatement: "لا ندرّب نموذجًا من الصفر الآن.",
      selectedPathLabel: "المسار المختار",
      selectedPathValue: "RAG + LLM",
      reasonLabel: "السبب",
      reason:
        "الداتا التي تم فحصها ممتازة للاسترجاع والتوليد المبني على المصادر، لكنها غير كافية لتدريب نموذج مستقل وموثوق.",
      detailedConclusion:
        "كتب JSON الحالية تمثل أساسًا معرفيًا قويًا. يجب تنظيفها، وتقسيمها، وفهرستها، وربطها مع LLM عبر مسار استرجاع معرفي. هذا يعطينا MVP أسرع، وتحكمًا أقوى بالمصادر، وقابلية مراجعة أعلى، وطريقًا أكثر أمانًا لبناء ثقة المستخدم.",
      futureLabel: "الاتجاه المستقبلي",
      futureDirection:
        "بعد جمع أحلام حقيقية من المستخدمين، وتفسيرات منظمة، ومراجعة خبراء، وتقييمات، واختبارات سلامة، يمكن التفكير في Fine-tuning. لكن طبقة المعرفة الأساسية يجب أن تبقى مبنية على الاسترجاع لأن نسبة المصدر جزء جوهري من ثقة المنتج.",
      finalLine: "ابنِ محرك المعرفة أولًا. درّب النموذج لاحقًا فقط عندما تصبح الداتا جاهزة فعلًا.",
      selectedBadge: "المسار المختار: RAG + LLM",
      futureBadge: "المستقبل: Fine-tuning بعد توفر بيانات حقيقية",
      ctaPrimary: { label: "ابدأ بناء MVP بنهج RAG", href: "#roadmap" },
      ctaSecondary: { label: "عرض خارطة التنفيذ", href: "#roadmap" },
    },
  },
}
