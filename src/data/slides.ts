export type Language = "en" | "ar"

type LangUI = {
  dir: "ltr" | "rtl"
  prev: string
  next: string
  backStart: string
  jumpFinal: string
  skipDecision: string
  cover: { title: string; subtitle: string; supporting: string; action: string }
  coverFlow: string[]
  product: {
    title: string
    subtitle: string
    text: string
    flow: string[]
    cards: { title: string; text: string; points: string[] }[]
    takeaway: string
  }
  sensitive: {
    title: string
    subtitle: string
    text: string
    cards: { title: string; text: string; points: string[] }[]
    takeaway: string
  }
  trust: {
    title: string
    subtitle: string
    text: string
    cards: { title: string; text: string; points: string[] }[]
    flow: string[]
    takeaway: string
  }
  paths: {
    title: string
    subtitle: string
    text: string
    path1: { title: string; label: string; text: string; details: string[]; badge: string }
    path2: { title: string; label: string; text: string; details: string[]; badge: string }
    divider: string
    decision: string
  }
  rag: {
    title: string
    subtitle: string
    text: string
    pipeline: { title: string; text: string }[]
    strengthsTitle: string
    strengths: string[]
    limitationsTitle: string
    limitations: string[]
    fit: string[]
  }
  ragFitTitle: string
  ragFit: {
    title: string
    subtitle: string
    text: string
    logic: { title: string; text: string }[]
    cards: { title: string; text: string }[]
    takeaway: string
  }
  custom: {
    title: string
    subtitle: string
    text: string
    lifecycle: string[]
    cards: { title: string; text: string; bullets: string[] }[]
    summaryTitle: string
    summaryText: string
  }
  dataset: {
    title: string
    subtitle: string
    text: string
    metrics: { title: string; description: string }[]
    interpretationTitle: string
    interpretationText: string
    decisionTitle: string
    decisionText: string
  }
  files: {
    title: string
    subtitle: string
    text: string
    items: string[]
    typeLabel: string
    useLabel: string
    statusLabel: string
    typeValue: string
    useValue: string
    statusValue: string
    pipelineTitle: string
    pipelineSteps: string[]
    noteTitle: string
    noteText: string
  }
  readiness: {
    title: string
    subtitle: string
    text: string
    leftTitle: string
    leftSubtitle: string
    leftItems: { title: string; text: string }[]
    rightTitle: string
    rightSubtitle: string
    rightItems: { title: string; text: string }[]
    conclusionTitle: string
    conclusionText: string
  }
  matrix: {
    title: string
    subtitle: string
    text: string
    rows: { criterion: string; rag: string; ragText: string; custom: string; customText: string }[]
    selectedBadge: string
    note: string
  }
  architecture: {
    title: string
    subtitle: string
    text: string
    nodes: { title: string; text: string }[]
    output: { title: string; text: string }
    stack: string[]
    takeaway: string
  }
  roadmap: { title: string; now: string; later: string; steps: { title: string; track: "now" | "later" }[] }
  final: { title: string; statement: string; selected: string; reason: string; closing: string; badge: string; future: string; cta1: string; cta2: string }
}

export const deckContent: Record<Language, LangUI> = {
  en: {
    dir: "ltr",
    prev: "Previous",
    next: "Next",
    backStart: "Back to Start",
    jumpFinal: "Jump to Final",
    skipDecision: "Skip to Decision",
    cover: {
      title: "AI Dream Interpretation System",
      subtitle: "A source-grounded engine for structured dream interpretation.",
      supporting:
        "An AI-assisted experience that interprets dreams through selected references, careful language, and probabilistic reasoning — without claiming to predict the future.",
      action: "Start Presentation",
    },
    coverFlow: [
      "User writes a dream",
      "System extracts symbols and context",
      "Retriever searches selected sources",
      "LLM writes a careful interpretation",
      "Result: grounded probabilistic interpretation, not future prediction",
    ],
    product: {
      title: "Product Concept",
      subtitle: "A structured interpretation journey from user dream to source-grounded answer.",
      text: "The product is not simply “write a dream and get an answer.” It creates a clear path: the user writes the dream naturally, selects a source or interpretation school, then the system analyzes symbols and context, searches indexed books, and generates a careful reference-based interpretation.",
      flow: ["Dream Input", "Source Selection", "Grounded Interpretation"],
      cards: [
        {
          title: "Dream Input",
          text: "The user writes the dream in natural language. The dream may include people, places, colors, emotions, events, or repeated symbols. The user does not need to write technically; the system analyzes the text.",
          points: ["Natural user text", "Emotions and context", "Symbols and events"],
        },
        {
          title: "Source Selection",
          text: "The user chooses the interpreter or school of interpretation. The system can support Al-Nabulsi, attributed Ibn Sirin material, Ibn Shaheen / Al-Zahiri, Miller, and later psychological symbolic interpretation.",
          points: ["Specific interpreter", "Interpretation school", "Multi-source comparison"],
        },
        {
          title: "Grounded Interpretation",
          text: "The system does not answer from memory alone. It retrieves the closest passages from the books, then the LLM generates a structured answer using probabilistic and safe language.",
          points: ["Retrieved passages", "Structured answer", "Safe uncertainty language"],
        },
      ],
      takeaway: "Takeaway: The real value is not a “quick interpretation.” It is an auditable, source-attributed answer that respects the sensitivity of the domain.",
    },
    sensitive: {
      title: "Why This Is Sensitive",
      subtitle: "Dream interpretation is not ordinary text processing; it touches belief, culture, psychology, and personal fear.",
      text: "A dream interpretation system must be careful. The risk is not only an inaccurate answer; it can become fear-inducing, falsely certain, or wrongly attributed to a source. The interpretation must therefore be probabilistic, source-grounded, and protected by a safety layer.",
      cards: [
        {
          title: "Religion and Culture",
          text: "Dream interpretation may connect to the user’s belief system and cultural background. The system must not treat symbols as having one fixed meaning for everyone. It should clarify that meaning depends on the selected source or tradition.",
          points: ["Different interpretation schools", "Personal belief sensitivity", "No claims about the unseen"],
        },
        {
          title: "Psychological State",
          text: "Some dreams may reflect anxiety, stress, trauma, fear, or exhaustion. In these cases, the system should not increase fear. It should use calm, supportive, and non-fatalistic language.",
          points: ["Repeated nightmares", "Strong fear or anxiety", "Need for reassuring language"],
        },
        {
          title: "Context Changes Meaning",
          text: "One symbol does not always mean the same thing. The sea, for example, may be calm or violent, and the user may feel afraid or safe. Action, emotion, and place change the interpretation direction.",
          points: ["Symbol alone is not enough", "Action inside the dream matters", "User emotion shapes meaning"],
        },
        {
          title: "Risk of Certainty and Fear",
          text: "The most dangerous mistake is saying: “this will happen to you.” The correct language is probabilistic: “may suggest,” “could indicate,” “according to the source.” The product must block frightening or absolute predictions.",
          points: ["No future prediction", "No absolute claims", "Source-grounded uncertainty"],
        },
      ],
      takeaway: "Takeaway: This is not just an entertainment app. To be trustworthy, the product must combine sources, context, and safe language.",
    },
    trust: {
      title: "Core Principle: The Source Leads the Answer",
      subtitle: "The system should not start from model memory. It should start from retrieved passages from selected sources.",
      text: "In dream interpretation, the issue is not only language quality. The greater risk is that the model may mix interpreters, invent meanings, or falsely attribute claims to a source. The pipeline must therefore begin with the source: retrieve the relevant text first, then allow the LLM to generate a careful and understandable interpretation.",
      cards: [
        {
          title: "Source Before Answer",
          text: "The system should not generate a full interpretation from the model’s general memory. Important answers should be grounded in retrieved passages or structured knowledge from indexed books.",
          points: ["Less guessing", "Less hallucination", "Auditable interpretation"],
        },
        {
          title: "Interpreter Separation",
          text: "Al-Nabulsi should not be mixed with Miller or psychological interpretation unless the user selects comparison mode. Each source must remain clear in the system and in the final answer.",
          points: ["Specific source per answer", "No mixing of traditions", "Comparison only by choice"],
        },
        {
          title: "Traceability and Review",
          text: "Trust does not come from elegant wording alone. We should be able to know which book, which chapter, which passage, and why it was connected to the user’s dream.",
          points: ["Clear source", "Traceable passage", "Reviewable interpretation decision"],
        },
      ],
      flow: ["Dream", "Symbol Extraction", "Source Retrieval", "LLM Generation", "Grounded Answer"],
      takeaway:
        "Takeaway: Without the source, the system becomes guesswork. With the source, interpretation becomes understandable and reviewable.",
    },
    paths: {
      title: "Two Technical Paths",
      subtitle: "The decision is not “AI or no AI.” It is whether the system should retrieve from sources or train a dedicated model.",
      text: "After inspecting the dataset, the technical question became clear: should we use the current books as a retrievable knowledge base, or should we try to train a model to learn dream interpretation from the data? The difference matters because the current dataset consists of books and source passages, not structured dream-to-answer examples.",
      path1: {
        title: "Path 01: RAG + LLM",
        label: "Retrieve knowledge, then generate the answer",
        text: "This path uses the current books as a knowledge base. When a new dream is submitted, the system searches indexed passages for the closest symbols and contexts, then passes the results to the LLM to generate a source-grounded interpretation.",
        details: [
          "Fits the current data because it is raw book text.",
          "Enables source attribution and traceability.",
          "Easier to add new interpreters and books.",
          "Reduces guessing when retrieval is controlled.",
        ],
        badge: "Suitable now",
      },
      path2: {
        title: "Path 02: Custom Model",
        label: "Train or tune a model to learn interpretation",
        text: "This path means building a standalone model or tuning an existing one to learn dream interpretation behavior. It requires many structured examples: dream, symbols, source, final interpretation, and quality rating.",
        details: [
          "Not suitable as the first step with raw books only.",
          "Requires structured training data.",
        ],
        badge: "Later, not now",
      },
      divider: "Now: Knowledge retrieval | Later: Model training",
      decision:
        "Decision note: Because the current data is source-heavy rather than training-ready, the logical first choice is RAG + LLM.",
    },
    rag: {
      title: "Path 01: RAG + LLM",
      subtitle: "Use the books as a knowledge base, then let the LLM generate an answer from retrieved passages.",
      text: "In this path, we do not ask the model to “remember” dream interpretation from inside itself. Instead, we turn the books into a searchable knowledge base. When a new dream arrives, the system extracts symbols and context, retrieves relevant passages, and passes them to the LLM to produce a careful source-grounded interpretation.",
      pipeline: [
        {
          title: "User Dream",
          text: "The user enters a dream in free text. It may include people, places, colors, emotions, and overlapping events.",
        },
        {
          title: "Dream Analysis",
          text: "The system extracts key elements: symbols, actions, emotions, locations, people, and repetition.",
        },
        {
          title: "Source Selection",
          text: "The user selects the interpreter or school: Al-Nabulsi, attributed Ibn Sirin material, Ibn Shaheen, Miller, or comparison mode.",
        },
        {
          title: "Retrieval",
          text: "The search engine retrieves the closest indexed book passages based on symbols and context.",
        },
        {
          title: "Evidence to LLM",
          text: "The LLM receives the dream plus retrieved passages, so it does not answer from unsupported guessing.",
        },
        {
          title: "Interpretation Generation",
          text: "The LLM connects the dream with the sources and writes a structured answer using probabilistic language: “may suggest,” “could indicate.”",
        },
        {
          title: "Safety Layer",
          text: "The answer is checked to prevent certainty, fear, claims about the unseen, or harmful advice.",
        },
      ],
      strengthsTitle: "Why This Path Is Strong",
      strengths: [
        "Uses the current data directly after cleaning.",
        "Makes interpretation traceable to a source.",
        "Reduces hallucination compared with free LLM answers.",
        "Can evolve by adding books and interpreters.",
        "Strong fit for a fast, trustworthy MVP.",
      ],
      limitationsTitle: "What Must Be Controlled",
      limitations: [
        "Retrieval quality must be tested.",
        "Text chunking must preserve meaning.",
        "Symbol extraction must be accurate.",
        "Sources must not be mixed unless selected by the user.",
        "The safety layer is required, not optional.",
      ],
      fit: ["Uses cleaned books directly", "Enables source attribution", "Easier to add interpreters", "Faster MVP", "Lower risk than standalone training"],
    },
    ragFitTitle: "Why RAG Fits This Project",
    ragFit: {
      title: "Why RAG Fits This Project",
      subtitle: "Because the problem is not only intelligence. It is connecting the dream to a trusted source and preventing unsupported guessing.",
      text: "RAG fits this project because the current data consists of books and source passages. This data does not teach a model how to answer a complete user dream, but it is excellent for retrieving meanings, symbols, and contexts. The smart approach is to turn the books into a searchable knowledge layer, then use the LLM to generate the interpretation.",
      logic: [
        { title: "Data Type", text: "JSON books, chapters, pages, and raw interpretation passages." },
        { title: "Best Use", text: "Clean, chunk, index, and retrieve the closest passages for each dream." },
        { title: "LLM Role", text: "The LLM does not memorize the books. It connects the dream to retrieved evidence and writes a clear answer." },
        { title: "Result", text: "A probabilistic, source-grounded, reviewable interpretation with lower hallucination risk." },
      ],
      cards: [
        {
          title: "The Data Is Source-Based, Not Training-Based",
          text: "The files contain knowledge from books, but they do not contain thousands of dream → interpretation examples. This makes them stronger as a retrieval base than as direct training data.",
        },
        {
          title: "Trust Needs a Source",
          text: "In this product, the user does not only need a well-written answer. The user needs to feel that the interpretation is connected to a clear reference, not model imagination.",
        },
        {
          title: "Adding Interpreters Is Easier",
          text: "With RAG, adding a new interpreter means cleaning and indexing that source. With a custom model, it may require retraining or additional tuning.",
        },
        {
          title: "Lower Hallucination Risk",
          text: "When the LLM receives relevant passages before answering, it relies less on general memory and is less likely to mix sources or invent meanings.",
        },
      ],
      takeaway:
        "Takeaway: RAG is not a weak temporary shortcut. It is the natural architecture when the project’s core strength is the source material itself.",
    },
    custom: {
      title: "If We Build a Machine Learning Model",
      subtitle:
        "This path requires structured training data, strict evaluation, and dedicated technical infrastructure before reaching a reliable model.",
      text: "Building a custom dream interpretation model means we are not only connecting an LLM to sources. We are training or tuning a model to learn how to answer. For this path to work, raw books alone are not enough. The knowledge must be transformed into structured training examples, then tested for quality, safety, and source accuracy.",
      lifecycle: ["Data", "Annotation", "Training", "Evaluation", "Deployment"],
      cards: [
        {
          title: "1. Structured Training Data",
          text: "We need clear examples: full dream, extracted symbols, selected source, supporting passages, final interpretation, and quality rating. Without these examples, the model will not learn the desired answer behavior.",
          bullets: [
            "Real user-style dream",
            "Extracted symbols and context",
            "Reviewed final answer",
            "Quality and safety rating",
          ],
        },
        {
          title: "2. Annotation Pipeline",
          text: "We need a labeling and review workflow. Human reviewers or experts identify symbols, connect them to sources, review interpretations, and classify answer quality. This step is required before serious fine-tuning.",
          bullets: ["Symbol labeling", "Source linking", "Human review", "Error classification"],
        },
        {
          title: "3. Model Training Setup",
          text: "We need to select a base model, prepare the training environment, format the dataset, tune parameters, and run multiple experiments. GPUs or cloud training services may be required depending on model size.",
          bullets: ["Choose base model", "Prepare dataset", "Fine-tuning experiments", "GPU / cloud training"],
        },
        {
          title: "4. Evaluation System",
          text: "A good-looking answer is not enough. We must measure accuracy, source grounding, uncertainty language, psychological safety, clarity, and whether the model mixes interpretation schools.",
          bullets: ["Interpretation accuracy", "Source grounding", "Safe language", "No source mixing"],
        },
        {
          title: "5. Deployment & Monitoring",
          text: "After training, we need to deploy the model, monitor performance, log failures, collect user feedback, and update the model when errors or new sources appear.",
          bullets: ["Model serving", "Quality monitoring", "Error tracking", "Continuous updates"],
        },
      ],
      summaryTitle: "Summary",
      summaryText:
        "The Machine Learning path is possible, but it requires a dataset designed for training, not only raw books. Success depends on example quality, human review, and a strict evaluation system before deployment.",
    },
    dataset: {
      title: "What We Found in the Data",
      subtitle: "We have useful JSON book knowledge, but not training-ready data.",
      text: "These numbers show that we have a strong knowledge foundation that can be cleaned, indexed, and retrieved. But they do not mean we have a model-ready training dataset. The distinction is critical: books tell us what the sources say, but they do not by themselves teach a model how to answer a modern user dream in a safe and structured way.",
      metrics: [
        {
          title: "7 JSON Books",
          description: "Different sources that can be separated by book, author, or interpretation school.",
        },
        {
          title: "2,580 Text Records",
          description: "Pages, chapters, and passages that can be converted into retrievable chunks.",
        },
        {
          title: "~4.3M Characters",
          description: "Useful for an initial knowledge base, but not enough to train a language model from scratch.",
        },
        {
          title: "Structured Fields",
          description: "Id, PageNumber, Part, ChapterTitle, ChapterLevel, and Content help build clean metadata.",
        },
      ],
      interpretationTitle: "What This Means Practically",
      interpretationText:
        "The data is suitable for building a knowledge search engine over dream interpretation books. The system can retrieve passages close to the dream symbols, then use the LLM to generate a careful interpretation. But it does not contain examples like: full dream → symbols → source → final answer → quality rating.",
      decisionTitle: "Decision Signal",
      decisionText:
        "Because the data consists of books and source passages, the correct next step is RAG. Training requires a different dataset built from examples and reviewed answers.",
    },
    files: {
      title: "Data Files",
      subtitle: "The collection contains dream interpretation and symbolic reference books in JSON format that can become a retrievable knowledge base.",
      text: "These files are not just names. Each file represents a knowledge source that can be cleaned, chunked, enriched with metadata, and indexed inside a vector search database. This turns each book into part of the interpretation engine.",
      items: [
        "taaber_alroya_10696.json",
        "abdul_ghani_alnabulsi_1217.json",
        "abu_bakr_almala_alahsayiyi_10652.json",
        "albadr_almunir_10703.json",
        "gustavus_hindman_miller_230.json",
        "ibn_sirin_21615.json",
        "khalil_alzahiri_9968.json",
      ],
      typeLabel: "Type",
      useLabel: "Use",
      statusLabel: "Status",
      typeValue: "JSON source",
      useValue: "retrieval knowledge",
      statusValue: "needs cleaning and indexing",
      pipelineTitle: "How Files Become a Knowledge Base",
      pipelineSteps: [
        "Clean text",
        "Normalize fields",
        "Add metadata",
        "Split content into chunks",
        "Generate embeddings",
        "Index passages in pgvector or Qdrant",
      ],
      noteTitle: "Note",
      noteText:
        "Some sources need clear classification by school or author, and historically attributed material should be handled carefully in the final product.",
    },
    readiness: {
      title: "Knowledge, Not Training Data",
      subtitle:
        "The current files can answer: “Where is this symbol discussed in the books?” But they cannot yet teach a model how to respond to a full dream.",
      text: "This distinction is decisive. Dream interpretation books contain source knowledge: chapters, symbols, and explanations. That is excellent for retrieval. But model training requires structured behavioral examples showing the desired answer when a real user submits a dream.",
      leftTitle: "RAG-Ready",
      leftSubtitle: "Because RAG needs knowledge passages to retrieve at runtime.",
      leftItems: [
        {
          title: "Source texts from books",
          text: "They can be indexed and retrieved when a similar symbol appears in the user’s dream.",
        },
        { title: "Chapters and titles", text: "They help classify passages and preserve context." },
        { title: "Chunkable passages", text: "Content can be split into smaller chunks that preserve meaning." },
        { title: "Book/author separation", text: "Allows source-specific interpretation and prevents mixing traditions." },
        {
          title: "Runtime retrieval",
          text: "Relevant passages are selected per dream instead of relying on model memory.",
        },
      ],
      rightTitle: "Not Training-Ready",
      rightSubtitle: "Because training needs examples that show how the model should answer.",
      rightItems: [
        { title: "No user dreams", text: "There are no complete dreams written in real user language." },
        { title: "No labeled answers", text: "There are no ready dream-to-final-interpretation pairs." },
        { title: "No symbol annotations", text: "Dream symbols have not yet been labeled and connected to sources." },
        {
          title: "No expert review",
          text: "We do not know answer quality or safety from a human review perspective.",
        },
        {
          title: "No preference data",
          text: "There are no ratings showing which answer is clearer, better, or safer.",
        },
      ],
      conclusionTitle: "Conclusion",
      conclusionText:
        "The current data gives us “what the sources say.” Training requires “how the system should respond.” That is why we start with RAG, then collect training data later from real usage and evaluation.",
    },
    matrix: {
      title: "Why RAG Wins Now",
      subtitle: "Because the decision should follow the nature of the data, not the desire to build a custom model too early.",
      text: "After inspecting the files, it became clear that the current data is closer to a knowledge library than a training dataset. So we compare both paths based on what we need now: MVP speed, source clarity, hallucination control, and scalability.",
      rows: [
        {
          criterion: "Dataset Fit",
          rag: "Excellent",
          ragText: "The current data is books and passages, exactly what RAG needs for retrieval.",
          custom: "Weak now",
          customText: "A model needs dream → interpretation examples, which do not exist yet.",
        },
        {
          criterion: "MVP Speed",
          rag: "Fast",
          ragText: "A first version can be built after cleaning and indexing the books.",
          custom: "Slow",
          customText: "Requires dataset preparation, training, evaluation, and many experiments.",
        },
        {
          criterion: "Source Citation",
          rag: "Strong",
          ragText: "Interpretation can be tied to retrieved passages from the books.",
          custom: "Weak",
          customText: "The model may answer without traceable source evidence.",
        },
        {
          criterion: "Cost",
          rag: "Manageable",
          ragText: "It requires indexing and LLM usage, not training a large model.",
          custom: "High",
          customText: "Requires GPUs, ML expertise, and repeated training/evaluation cycles.",
        },
        {
          criterion: "Hallucination Control",
          rag: "Better",
          ragText: "Answers can be constrained by retrieved passages if the system is designed well.",
          custom: "Riskier",
          customText: "It may invent or mix sources if not grounded by retrieval.",
        },
        {
          criterion: "Adding New Sources",
          rag: "Easy",
          ragText: "Adding a new book means cleaning and indexing it.",
          custom: "Harder",
          customText: "May require retraining or additional tuning to integrate the new source.",
        },
      ],
      selectedBadge: "Selected path now: RAG + LLM",
      note: "The custom model is not cancelled. It is deferred until real examples and human evaluations are collected.",
    },
    architecture: {
      title: "Recommended Architecture",
      subtitle: "A clear path from dream input to safe, source-grounded interpretation.",
      text: "The recommended architecture separates responsibilities: the interface collects the dream, the API organizes the request, the dream parser extracts symbols, vector search retrieves relevant book passages, and the LLM generates a careful interpretation that passes through a safety layer before reaching the user.",
      nodes: [
        {
          title: "Frontend",
          text: "Dream input, language selection, source selection, and final interpretation display.",
        },
        {
          title: "Backend API",
          text: "Receives the request, validates input, applies settings, and coordinates the system components.",
        },
        {
          title: "Dream Parser",
          text: "Analyzes the dream text to extract symbols, actions, emotions, people, places, and colors.",
        },
        {
          title: "Symbol Index",
          text: "Connects symbols with aliases and variants, such as snake, serpent, viper, or sea, water, drowning.",
        },
        {
          title: "Vector Search",
          text: "Searches indexed passages for texts that are semantically and contextually closest to the dream.",
        },
        {
          title: "Knowledge Base",
          text: "Cleaned JSON books enriched with metadata and split into retrievable chunks.",
        },
        {
          title: "LLM",
          text: "Generates a structured interpretation from the dream and retrieved passages, not from unsupported guessing alone.",
        },
        {
          title: "Safety Layer",
          text: "Checks the answer to prevent certainty, fear, claims about the unseen, or harmful advice.",
        },
      ],
      output: {
        title: "Final Answer",
        text: "A clear, probabilistic, source-grounded interpretation that respects the sensitivity of the domain.",
      },
      stack: ["React", "Django or FastAPI", "PostgreSQL", "pgvector or Qdrant", "Embeddings", "LLM", "Safety Guardrails", "Metadata Layer"],
      takeaway:
        "Takeaway: This architecture keeps knowledge outside the model and easy to update, while the LLM focuses on synthesis, structure, and context.",
    },
    roadmap: {
      title: "Implementation Roadmap",
      now: "Now",
      later: "Later",
      steps: [
        { title: "Clean books", track: "now" },
        { title: "Add metadata", track: "now" },
        { title: "Chunk content", track: "now" },
        { title: "Build symbol index", track: "now" },
        { title: "Vector search", track: "now" },
        { title: "Interpretation API", track: "now" },
        { title: "Safety & attribution", track: "now" },
        { title: "Quality evaluation", track: "now" },
        { title: "User feedback", track: "now" },
        { title: "Fine-tuning later", track: "later" },
      ],
    },
    final: {
      title: "Final Technical Decision",
      statement: "Do not train from scratch now.",
      selected: "Selected path: RAG + LLM",
      reason: "The current data is excellent for retrieval and source-grounded generation, but not enough for training a reliable standalone model.",
      closing: "Build the knowledge engine first. Train later only when the data justifies it.",
      badge: "Selected Path: RAG + LLM",
      future: "Future: Fine-tuning after real data",
      cta1: "Start Building the RAG MVP",
      cta2: "View Roadmap",
    },
  },
  ar: {
    dir: "rtl",
    prev: "السابق",
    next: "التالي",
    backStart: "العودة للبداية",
    jumpFinal: "الانتقال للقرار النهائي",
    skipDecision: "تجاوز إلى القرار",
    cover: {
      title: "نظام ذكاء اصطناعي لتفسير الأحلام",
      subtitle: "محرك تفسير يعتمد على المصادر، لا على التخمين.",
      supporting:
        "نحو تجربة ذكية تفسّر الحلم بناءً على كتب مختارة ومراجع واضحة، مع لغة احتمالية وآمنة، دون ادعاء معرفة الغيب أو التنبؤ بالمستقبل.",
      action: "ابدأ العرض",
    },
    coverFlow: [
      "المستخدم يكتب حلمه",
      "النظام يستخرج الرموز والسياق",
      "يبحث في المصادر المختارة",
      "LLM يصيغ تفسيرًا حذرًا",
      "النتيجة: تفسير احتمالي موثّق، لا ادعاء بالغيب",
    ],
    product: {
      title: "فكرة المنتج",
      subtitle: "تجربة تفسير منظمة تبدأ من حلم المستخدم وتنتهي بجواب مبني على مصدر واضح.",
      text: "الفكرة ليست مجرد “اكتب حلمك وخذ تفسيرًا”. المنتج يبني مسارًا واضحًا: المستخدم يكتب الحلم بلغته الطبيعية، يختار المصدر أو المدرسة التفسيرية، ثم يقوم النظام بتحليل الرموز والسياق والبحث في الكتب المفهرسة قبل صياغة تفسير حذر ومبني على المراجع.",
      flow: ["إدخال الحلم", "اختيار المصدر", "تفسير موثّق"],
      cards: [
        {
          title: "إدخال الحلم",
          text: "يكتب المستخدم حلمه كنص حر، وقد يحتوي الحلم على أشخاص، أماكن، ألوان، مشاعر، أحداث، أو رموز متكررة. لا نطلب من المستخدم صياغة تقنية؛ النظام هو من يحلل النص.",
          points: ["نص طبيعي من المستخدم", "مشاعر وسياق", "رموز وأحداث"],
        },
        {
          title: "اختيار المصدر",
          text: "يختار المستخدم المدرسة أو المفسر الذي يريد الاعتماد عليه. يمكن دعم النابلسي، مواد منسوبة لابن سيرين، ابن شاهين/الظاهري، ميلر، ولاحقًا تفسير نفسي رمزي.",
          points: ["مفسر محدد", "مدرسة تفسيرية", "مقارنة بين مصادر"],
        },
        {
          title: "تفسير موثّق",
          text: "لا يجيب النظام من الذاكرة فقط. يتم استرجاع المقاطع الأقرب من الكتب، ثم يصيغ LLM تفسيرًا منظمًا بلغة احتمالية، مع توضيح أن النتيجة ليست حكمًا قطعيًا ولا تنبؤًا بالغيب.",
          points: ["مقاطع مسترجعة", "جواب منظم", "لغة احتمالية وآمنة"],
        },
      ],
      takeaway: "الخلاصة: القيمة الحقيقية ليست في “تفسير سريع”، بل في تفسير قابل للمراجعة، منسوب إلى مصدر، ويحترم حساسية المجال.",
    },
    sensitive: {
      title: "لماذا المجال حساس؟",
      subtitle: "تفسير الأحلام لا يتعامل مع نص عادي؛ بل يلامس المعتقد، الثقافة، الحالة النفسية، والخوف الشخصي.",
      text: "أي نظام يفسّر الأحلام يجب أن يكون حذرًا. الخطأ هنا ليس مجرد إجابة غير دقيقة، بل قد يتحول إلى تخويف المستخدم، أو منحه يقينًا زائفًا، أو نسبة كلام لمصدر لم يقله. لذلك يجب أن يكون التفسير احتماليًا، موثقًا، ومضبوطًا بطبقة سلامة.",
      cards: [
        {
          title: "الدين والثقافة",
          text: "تفسير الأحلام قد يرتبط بإيمان المستخدم وخلفيته الثقافية. لذلك لا يجوز أن يتعامل النظام مع الرموز وكأن لها معنى واحدًا ثابتًا لكل الناس. يجب أن يوضح أن التفسير مرتبط بالمنهج أو المصدر المختار.",
          points: ["اختلاف المدارس التفسيرية", "حساسية المعتقد الشخصي", "ضرورة عدم ادعاء الغيب"],
        },
        {
          title: "الحالة النفسية",
          text: "بعض الأحلام قد تكون انعكاسًا لقلق، ضغط، صدمة، خوف، أو إرهاق. في هذه الحالات لا يجب أن يزيد النظام خوف المستخدم، بل يقدّم تفسيرًا هادئًا ولغة داعمة وغير حتمية.",
          points: ["كوابيس متكررة", "خوف أو قلق شديد", "حاجة للغة مطمئنة"],
        },
        {
          title: "السياق يغيّر المعنى",
          text: "الرمز الواحد لا يعني الشيء نفسه دائمًا. البحر مثلًا قد يظهر هادئًا أو هائجًا، وقد يكون المستخدم خائفًا أو مطمئنًا. الفعل والشعور والمكان يغيّرون اتجاه التفسير.",
          points: ["الرمز وحده لا يكفي", "الفعل داخل الحلم مهم", "شعور المستخدم جزء من المعنى"],
        },
        {
          title: "خطر الجزم والتخويف",
          text: "أخطر خطأ أن يقول النظام: “سيحدث لك كذا”. الصياغة الصحيحة يجب أن تكون احتمالية: “قد يرمز”، “يمكن أن يدل”، “بحسب المصدر”. المنتج يجب أن يمنع التنبؤات القاطعة والمخيفة.",
          points: ["لا تنبؤ بالمستقبل", "لا أحكام قطعية", "تفسير احتمالي موثق"],
        },
      ],
      takeaway: "الخلاصة: هذا ليس تطبيق تسلية فقط. لكي يكون المنتج موثوقًا، يجب أن يجمع بين المصادر، السياق، واللغة الآمنة.",
    },
    trust: {
      title: "المبدأ الأساسي: المصدر يقود الإجابة",
      subtitle: "لا يبدأ النظام بالتفسير من ذاكرة النموذج، بل من المقاطع المسترجعة من المصادر المختارة.",
      text: "في تفسير الأحلام، المشكلة ليست فقط في جودة اللغة. المشكلة الأخطر هي أن يخلط النموذج بين المفسرين، أو يخترع معنى غير موجود، أو ينسب كلامًا لمصدر لم يقله. لذلك يجب أن يبدأ المسار من المصدر: نسترجع النص المناسب أولًا، ثم نسمح لـ LLM بصياغة تفسير حذر ومفهوم.",
      cards: [
        {
          title: "المصدر قبل الجواب",
          text: "لا يجب أن ينتج النظام تفسيرًا كاملًا من الذاكرة العامة للنموذج. كل جواب مهم يجب أن يكون مبنيًا على مقاطع مسترجعة أو معرفة منظمة من الكتب المفهرسة.",
          points: ["تقليل التخمين", "تقليل الهلوسة", "تفسير قابل للمراجعة"],
        },
        {
          title: "فصل المفسرين والمدارس",
          text: "تفسير النابلسي لا يجب أن يختلط بتفسير ميلر أو التفسير النفسي إلا إذا اختار المستخدم وضع المقارنة. كل مصدر يجب أن يبقى واضحًا داخل النظام والجواب.",
          points: ["مصدر محدد لكل تفسير", "منع الخلط بين المناهج", "دعم المقارنة عند الطلب فقط"],
        },
        {
          title: "قابلية التتبع والمراجعة",
          text: "الثقة لا تأتي من جمال النص فقط. يجب أن نستطيع معرفة: أي كتاب استُخدم؟ أي باب؟ أي مقطع؟ ولماذا تم ربطه بحلم المستخدم؟",
          points: ["مصدر واضح", "مقطع قابل للتتبع", "قرار تفسير يمكن مراجعته"],
        },
      ],
      flow: ["الحلم", "استخراج الرموز", "استرجاع المصدر", "صياغة LLM", "جواب موثّق"],
      takeaway:
        "الخلاصة: إذا غاب المصدر، يتحول النظام إلى تخمين. وإذا حضر المصدر، يصبح التفسير قابلًا للفهم والمراجعة.",
    },
    paths: {
      title: "أمامنا مساران تقنيان",
      subtitle: "القرار ليس بين “ذكاء اصطناعي” و“لا ذكاء اصطناعي”، بل بين بنية تعتمد على استرجاع المصادر، وبنية تعتمد على تدريب نموذج مخصص.",
      text: "بعد فحص البيانات، أصبح السؤال التقني واضحًا: هل نستخدم الكتب الحالية كقاعدة معرفة نسترجع منها وقت الطلب؟ أم نحاول تدريب نموذج ليتعلم التفسير من الداتا؟ الفرق بين المسارين مهم، لأن الداتا الحالية عبارة عن كتب ومقاطع مصدرية، وليست أمثلة منظمة من حلم إلى تفسير.",
      path1: {
        title: "المسار 01: RAG + LLM",
        label: "استرجاع المعرفة ثم توليد الجواب",
        text: "هذا المسار يستخدم الكتب الحالية كقاعدة معرفة. عند إدخال حلم جديد، يبحث النظام في المقاطع المفهرسة عن الرموز والسياقات الأقرب، ثم يمرر النتائج إلى LLM ليصيغ تفسيرًا مبنيًا على المصدر.",
        details: [
          "مناسب للداتا الحالية لأنها كتب خام.",
          "يسمح بذكر المصدر أو تتبع التفسير.",
          "أسهل في إضافة مفسرين وكتب جديدة.",
          "يقلل التخمين إذا كان الاسترجاع مضبوطًا.",
        ],
        badge: "",
      },
      path2: {
        title: "المسار 02: نموذج مخصص",
        label: "تدريب أو ضبط نموذج ليتعلم التفسير",
        text: "هذا المسار يعني بناء نموذج مستقل أو ضبط نموذج موجود ليتعلم أسلوب تفسير الأحلام. لكنه يحتاج أمثلة كثيرة ومنظمة من نوع: حلم، رموز، مصدر، تفسير نهائي، وتقييم جودة.",
        details: [
          "غير مناسب كبداية مع كتب خام فقط.",
          "يحتاج داتا تدريبية منظمة.",
        ],
        badge: "",
      },
      divider: "",
      decision: "ملاحظة القرار: بما أن البيانات الحالية مصدرية وليست تدريبية، فالاختيار المنطقي كبداية هو RAG + LLM.",
    },
    rag: {
      title: "المسار الأول: RAG + LLM",
      subtitle: "نستخدم الكتب كقاعدة معرفة، ثم نسمح لـ LLM بصياغة تفسير مبني على المقاطع المسترجعة.",
      text: "في هذا المسار، لا نطلب من النموذج أن “يتذكر” تفسير الأحلام من داخله. بدلًا من ذلك، نحول الكتب إلى قاعدة معرفة قابلة للبحث. عند وصول حلم جديد، يستخرج النظام الرموز والسياق، يبحث في المقاطع المناسبة، ثم يمرر النتائج إلى LLM ليكتب تفسيرًا حذرًا ومبنيًا على المصدر.",
      pipeline: [
        {
          title: "حلم المستخدم",
          text: "يدخل المستخدم حلمه كنص حر، وقد يحتوي على أشخاص، أماكن، ألوان، مشاعر، وأحداث متداخلة.",
        },
        {
          title: "تحليل الحلم",
          text: "النظام يستخرج العناصر المهمة: الرموز، الأفعال، الشعور، المكان، الأشخاص، والتكرار.",
        },
        {
          title: "اختيار المصدر",
          text: "يحدد المستخدم المفسر أو المدرسة: النابلسي، ابن سيرين/مواد منسوبة، ابن شاهين، ميلر، أو مقارنة.",
        },
        {
          title: "الاسترجاع",
          text: "محرك البحث يستدعي المقاطع الأقرب من الكتب المفهرسة بناءً على الرموز والسياق.",
        },
        {
          title: "تمرير الأدلة إلى LLM",
          text: "لا يحصل LLM على الحلم فقط، بل يحصل أيضًا على المقاطع المسترجعة كي لا يجيب من التخمين.",
        },
        {
          title: "صياغة التفسير",
          text: "يقوم LLM بربط الحلم بالمصادر وصياغة تفسير منظم بلغة احتمالية: “قد يدل”، “يمكن أن يرمز”.",
        },
        {
          title: "طبقة السلامة",
          text: "تراجع الإجابة لمنع الجزم، التخويف، الادعاء بالغيب، أو النصائح المؤذية.",
        },
      ],
      strengthsTitle: "لماذا هذا المسار قوي؟",
      strengths: [
        "يستخدم الداتا الحالية مباشرة بعد تنظيفها.",
        "يسمح بتتبع التفسير إلى مصدر.",
        "يقلل الهلوسة مقارنة بجواب حر من LLM.",
        "يمكن تطويره تدريجيًا بإضافة كتب ومفسرين.",
        "مناسب جدًا لبناء MVP سريع وموثوق.",
      ],
      limitationsTitle: "ما الذي يجب ضبطه؟",
      limitations: [
        "جودة الاسترجاع يجب اختبارها.",
        "تقسيم النصوص إلى chunks يجب أن يكون ذكيًا.",
        "استخراج الرموز من الحلم يجب أن يكون دقيقًا.",
        "يجب منع خلط المصادر دون اختيار المستخدم.",
        "طبقة السلامة ضرورية وليست اختيارية.",
      ],
      fit: ["يستخدم الكتب بعد تنظيفها", "يدعم نسبة المصدر", "أسهل لإضافة مفسرين", "أسرع لإطلاق MVP", "أقل مخاطرة من تدريب نموذج مستقل"],
    },
    ragFitTitle: "لماذا يناسبنا RAG؟",
    ragFit: {
      title: "لماذا يناسبنا RAG؟",
      subtitle: "لأن مشكلتنا ليست نقص الذكاء، بل ربط الحلم بمصدر موثوق ومنع النموذج من التخمين.",
      text: "RAG يناسب هذا المشروع لأن الداتا الحالية عبارة عن كتب ومقاطع مصدرية. هذه الداتا لا تقول للنموذج كيف يجيب على حلم مستخدم كامل، لكنها ممتازة لكي نسترجع منها معنى الرموز والسياقات. لذلك الخيار الذكي هو تحويل الكتب إلى طبقة معرفة قابلة للبحث، ثم استخدام LLM لصياغة التفسير.",
      logic: [
        { title: "نوع البيانات", text: "كتب JSON، أبواب، صفحات، ومقاطع تفسيرية خام." },
        { title: "أفضل استخدام لها", text: "تنظيف، تقسيم، فهرسة، ثم استرجاع المقاطع الأقرب للحلم." },
        { title: "دور LLM", text: "لا يحفظ الكتب، بل يربط الحلم بالمقاطع المسترجعة ويصيغ تفسيرًا مفهومًا." },
        { title: "النتيجة", text: "تفسير احتمالي موثّق، قابل للمراجعة، وأقل عرضة للهلوسة." },
      ],
      cards: [
        {
          title: "الداتا مصدرية وليست تدريبية",
          text: "الملفات تحتوي على معرفة من كتب، لكنها لا تحتوي على آلاف الأمثلة من نوع حلم → تفسير. هذا يجعلها أقوى كقاعدة استرجاع، لا كمادة تدريب مباشرة.",
        },
        {
          title: "الثقة تحتاج مصدرًا",
          text: "في هذا المنتج، المستخدم لا يحتاج جوابًا جميلًا فقط. يحتاج أن يشعر أن التفسير مبني على مرجع واضح وليس على خيال النموذج.",
        },
        {
          title: "إضافة المفسرين أسهل",
          text: "مع RAG، إضافة مفسر جديد تعني تنظيف كتابه وفهرسته. أما النموذج المخصص فقد يحتاج إعادة تدريب أو ضبط إضافي.",
        },
        {
          title: "تقليل الهلوسة",
          text: "عندما نعطي LLM المقاطع المناسبة قبل الإجابة، يصبح أقل اعتمادًا على ذاكرته العامة وأقل ميلًا لخلط المصادر أو اختراع معانٍ.",
        },
      ],
      takeaway:
        "الخلاصة: RAG ليس اختيارًا مؤقتًا ضعيفًا؛ هو الخيار الطبيعي عندما تكون القوة الأساسية للمشروع هي المصادر نفسها.",
    },
    custom: {
      title: "إذا اخترنا بناء نموذج Machine Learning",
      subtitle: "هذا المسار يحتاج داتا تدريبية منظمة، تقييم صارم، وبنية تقنية مخصصة قبل الوصول إلى نموذج موثوق.",
      text: "بناء نموذج مخصص لتفسير الأحلام يعني أننا لا نكتفي بربط LLM بالمصادر، بل نحاول تدريب نموذج أو ضبط نموذج جاهز ليتعلم طريقة الإجابة. لكي يكون هذا المسار ناجحًا، لا تكفي الكتب الخام وحدها. نحتاج تحويل المعرفة إلى أمثلة تدريبية واضحة، ثم اختبار النموذج على الجودة، السلامة، ودقة النسبة إلى المصادر.",
      lifecycle: ["Data", "Annotation", "Training", "Evaluation", "Deployment"],
      cards: [
        {
          title: "1. داتا تدريبية منظمة",
          text: "نحتاج أمثلة واضحة من نوع: حلم كامل، الرموز المستخرجة، المصدر المستخدم، المقاطع الداعمة، التفسير النهائي، وتقييم جودة الإجابة. بدون هذه الأمثلة، النموذج لن يتعلم سلوك الإجابة المطلوب.",
          bullets: ["حلم مكتوب بلغة مستخدم حقيقية", "رموز وسياق مستخرج", "تفسير نهائي مراجع", "تقييم جودة وسلامة"],
        },
        {
          title: "2. Annotation Pipeline",
          text: "يجب بناء عملية وسم ومراجعة. فريق بشري أو خبير يحدد الرموز، يربطها بالمصادر، يراجع التفسير، ويصنف جودة الإجابة. هذه المرحلة ضرورية قبل أي Fine-tuning جاد.",
          bullets: ["وسم الرموز", "ربط بالمصدر", "مراجعة بشرية", "تصنيف الأخطاء"],
        },
        {
          title: "3. Model Training Setup",
          text: "نحتاج اختيار نموذج أساسي، تجهيز بيئة تدريب، إعداد بيانات التدريب، ضبط المعلمات، وتشغيل تجارب متعددة. وقد نحتاج GPUs أو خدمات تدريب سحابية حسب حجم النموذج.",
          bullets: ["اختيار base model", "تجهيز dataset", "Fine-tuning experiments", "GPU / Cloud training"],
        },
        {
          title: "4. Evaluation System",
          text: "لا يكفي أن ينتج النموذج إجابة جميلة. يجب قياس الدقة، ارتباط الجواب بالمصدر، عدم الجزم، السلامة النفسية، وضوح اللغة، وعدم خلط المدارس التفسيرية.",
          bullets: ["دقة التفسير", "ارتباط بالمصدر", "سلامة اللغة", "عدم خلط المفسرين"],
        },
        {
          title: "5. Deployment & Monitoring",
          text: "بعد التدريب، نحتاج تشغيل النموذج، مراقبة الأداء، تسجيل الأخطاء، جمع ملاحظات المستخدمين، وتحديث النموذج عند ظهور أخطاء أو مصادر جديدة.",
          bullets: ["تشغيل النموذج", "مراقبة الجودة", "تتبع الأخطاء", "تحديثات مستمرة"],
        },
      ],
      summaryTitle: "الخلاصة",
      summaryText:
        "مسار Machine Learning ممكن، لكنه يحتاج Dataset مصممة للتدريب، وليس فقط كتب خام. النجاح هنا يعتمد على جودة الأمثلة، المراجعة البشرية، ونظام تقييم صارم قبل إطلاق النموذج.",
    },
    dataset: {
      title: "ماذا وجدنا في البيانات؟",
      subtitle: "لدينا مادة معرفية جيدة من كتب JSON، لكنها ليست داتا تدريب جاهزة.",
      text: "هذه الأرقام تعني أن لدينا أساسًا معرفيًا قويًا يمكن تنظيفه وفهرسته واسترجاعه. لكنها لا تعني أن لدينا نموذجًا جاهزًا للتدريب. الفرق مهم جدًا: الكتب تخبرنا ماذا قالت المصادر، لكنها لا تعلّم النموذج وحدها كيف يجيب على حلم مستخدم معاصر بصيغة آمنة ومنظمة.",
      metrics: [
        {
          title: "7 كتب JSON",
          description: "مصادر مختلفة يمكن فصلها حسب الكتاب أو المؤلف أو المدرسة التفسيرية.",
        },
        {
          title: "2,580 سجل نصي",
          description: "مقاطع وصفحات وأبواب يمكن تحويلها إلى chunks قابلة للفهرسة والاسترجاع.",
        },
        {
          title: "حوالي 4.3M حرف",
          description: "حجم جيد لبناء قاعدة معرفة أولية، وليس كافيًا لتدريب نموذج لغوي من الصفر.",
        },
        {
          title: "حقول منظمة",
          description: "Id، PageNumber، Part، ChapterTitle، ChapterLevel، Content تساعد في بناء metadata واضحة.",
        },
      ],
      interpretationTitle: "ماذا تعني هذه البيانات عمليًا؟",
      interpretationText:
        "الداتا مناسبة لبناء محرك بحث معرفي داخل كتب تفسير الأحلام. يمكن للنظام استرجاع مقاطع قريبة من رموز الحلم، ثم يستخدم LLM لصياغة تفسير حذر. لكنها لا تحتوي على أمثلة من نوع: حلم كامل → رموز → مصدر → تفسير نهائي → تقييم جودة.",
      decisionTitle: "إشارة القرار",
      decisionText:
        "بما أن البيانات عبارة عن كتب ومقاطع مصدرية، فالخطوة الصحيحة هي RAG. أما التدريب فيحتاج Dataset مختلفة مبنية على أمثلة وإجابات مراجعة.",
    },
    files: {
      title: "ملفّات البيانات",
      subtitle: "المجموعة تحتوي على كتب ومراجع تفسير أحلام بصيغة JSON يمكن تحويلها إلى قاعدة معرفة قابلة للاسترجاع.",
      text: "هذه الملفات ليست مجرد أسماء. كل ملف يمثل مصدرًا معرفيًا يمكن تنظيفه، تقسيمه إلى مقاطع، إضافة metadata له، ثم فهرسته داخل قاعدة بحث متجهية. بهذه الطريقة يصبح كل كتاب جزءًا من محرك التفسير.",
      items: [
        "taaber_alroya_10696.json",
        "abdul_ghani_alnabulsi_1217.json",
        "abu_bakr_almala_alahsayiyi_10652.json",
        "albadr_almunir_10703.json",
        "gustavus_hindman_miller_230.json",
        "ibn_sirin_21615.json",
        "khalil_alzahiri_9968.json",
      ],
      typeLabel: "النوع",
      useLabel: "الاستخدام",
      statusLabel: "الحالة",
      typeValue: "مصدر JSON",
      useValue: "معرفة للاسترجاع",
      statusValue: "يحتاج تنظيف وفهرسة",
      pipelineTitle: "كيف تتحول الملفات إلى Knowledge Base؟",
      pipelineSteps: [
        "تنظيف النصوص",
        "توحيد الحقول",
        "إضافة metadata",
        "تقسيم المحتوى إلى chunks",
        "توليد embeddings",
        "فهرسة المقاطع في pgvector أو Qdrant",
      ],
      noteTitle: "ملاحظة",
      noteText:
        "بعض المصادر تحتاج تصنيفًا واضحًا حسب المدرسة أو المؤلف، وبعض المواد المنسوبة تاريخيًا يجب التعامل معها بحذر في العرض النهائي.",
    },
    readiness: {
      title: "معرفة خام وليست داتا تدريب",
      subtitle:
        "الملفات الحالية تجيب على سؤال: “أين ورد هذا الرمز في الكتب؟” لكنها لا تكفي لتعليم نموذج كيف يرد على حلم كامل.",
      text: "الفرق هنا حاسم. كتب تفسير الأحلام تحتوي على معرفة مصدرية: أبواب، رموز، وشروح. هذا ممتاز للاسترجاع. لكن تدريب نموذج يحتاج أمثلة سلوكية منظّمة توضّح شكل الإجابة المطلوبة عند إدخال حلم حقيقي من مستخدم.",
      leftTitle: "مناسبة لـ RAG",
      leftSubtitle: "لأن RAG يحتاج مقاطع معرفية يسترجعها وقت الطلب.",
      leftItems: [
        {
          title: "نصوص مصدرية من كتب",
          text: "يمكن فهرستها واسترجاعها عند ظهور رمز مشابه في حلم المستخدم.",
        },
        { title: "أبواب وعناوين", text: "تساعد في فهم سياق المقطع وتصنيفه." },
        { title: "مقاطع قابلة للتقسيم", text: "يمكن تحويل المحتوى إلى chunks صغيرة تحفظ المعنى." },
        { title: "فصل حسب الكتاب أو المؤلف", text: "يسمح بتفسير خاص بكل مصدر ومنع الخلط بين المدارس." },
        {
          title: "استرجاع وقت الطلب",
          text: "يتم اختيار المقاطع المناسبة لكل حلم بدل الاعتماد على ذاكرة النموذج.",
        },
      ],
      rightTitle: "غير كافية للتدريب",
      rightSubtitle: "لأن التدريب يحتاج أمثلة توضّح كيف يجب أن يجيب النموذج.",
      rightItems: [
        { title: "لا توجد أحلام مستخدمين", text: "لا يوجد نص حلم كامل مكتوب بصيغة مستخدم حقيقي." },
        { title: "لا توجد إجابات معنونة", text: "لا توجد أزواج جاهزة من حلم إلى تفسير نهائي." },
        { title: "لا توجد ترميزات رموز", text: "لم يتم بعد تحديد الرموز داخل كل حلم وربطها بالمصادر." },
        { title: "لا توجد مراجعة خبراء", text: "لا نعرف جودة الإجابات أو سلامتها من منظور بشري." },
        {
          title: "لا توجد بيانات تفضيل",
          text: "لا توجد تقييمات توضّح أي جواب أفضل أو أوضح أو أكثر أمانًا.",
        },
      ],
      conclusionTitle: "الاستنتاج",
      conclusionText:
        "الداتا الحالية تعطينا “ماذا تقول المصادر”. أما التدريب فيحتاج “كيف يجب أن يرد النظام”. لذلك نبدأ بـ RAG، ثم نجمع لاحقًا داتا تدريبية من الاستخدام الحقيقي والتقييمات.",
    },
    matrix: {
      title: "لماذا يفوز RAG الآن؟",
      subtitle: "لأن القرار يجب أن يتبع طبيعة البيانات، لا الرغبة في بناء نموذج مخصص قبل أوانه.",
      text: "بعد فحص الملفات، أصبح واضحًا أن البيانات الحالية أقرب إلى “مكتبة معرفية” من كونها Dataset تدريبية. لذلك نقارن المسارين بناءً على ما نحتاجه الآن: سرعة MVP، وضوح المصدر، تقليل الهلوسة، وقابلية التوسع.",
      rows: [
        {
          criterion: "توافق البيانات",
          rag: "ممتاز",
          ragText: "البيانات الحالية كتب ومقاطع، وهذا بالضبط ما يحتاجه RAG للاسترجاع.",
          custom: "ضعيف الآن",
          customText: "النموذج يحتاج أمثلة حلم → تفسير، وهي غير موجودة حاليًا.",
        },
        {
          criterion: "سرعة MVP",
          rag: "سريع",
          ragText: "يمكن بناء نسخة أولى بعد تنظيف الكتب وفهرستها.",
          custom: "بطيء",
          customText: "يتطلب إعداد Dataset، تدريب، تقييم، وتجارب كثيرة.",
        },
        {
          criterion: "ذكر المصدر",
          rag: "قوي",
          ragText: "يمكن ربط التفسير بالمقاطع المسترجعة من الكتب.",
          custom: "ضعيف",
          customText: "النموذج قد يعطي جوابًا دون القدرة على تتبع مصدر دقيق.",
        },
        {
          criterion: "التكلفة",
          rag: "قابلة للإدارة",
          ragText: "يعتمد على فهرسة وتشغيل LLM، لا تدريب نموذج ضخم.",
          custom: "مرتفعة",
          customText: "يتطلب GPUs، خبرة ML، وتجارب تدريب وتقييم.",
        },
        {
          criterion: "التحكم بالهلوسة",
          rag: "أفضل",
          ragText: "الإجابة مقيدة بالمقاطع المسترجعة إذا صُمم النظام جيدًا.",
          custom: "أخطر",
          customText: "قد يخترع أو يخلط المصادر إذا لم يكن مربوطًا باسترجاع.",
        },
        {
          criterion: "إضافة مصادر جديدة",
          rag: "سهلة",
          ragText: "إضافة كتاب جديد تعني تنظيفه وفهرسته.",
          custom: "أصعب",
          customText: "قد يحتاج تدريبًا أو ضبطًا إضافيًا لدمج المصدر الجديد.",
        },
      ],
      selectedBadge: "المسار المختار الآن: RAG + LLM",
      note: "النموذج المخصص ليس ملغى. هو مؤجل إلى مرحلة لاحقة بعد جمع أمثلة حقيقية وتقييمات بشرية.",
    },
    architecture: {
      title: "البنية التقنية المقترحة",
      subtitle: "مسار واضح من إدخال الحلم إلى تفسير آمن ومبني على المصادر.",
      text: "البنية المقترحة تعتمد على فصل الأدوار: الواجهة تستقبل الحلم، الـ API ينظم الطلب، محلل الحلم يستخرج الرموز، البحث المتجهي يسترجع المقاطع المناسبة من الكتب، ثم يصيغ LLM تفسيرًا حذرًا تمر عليه طبقة سلامة قبل عرضه للمستخدم.",
      nodes: [
        {
          title: "Frontend",
          text: "واجهة إدخال الحلم، اختيار اللغة، اختيار المصدر، وعرض التفسير النهائي.",
        },
        {
          title: "Backend API",
          text: "يستقبل الطلب، يتحقق من المدخلات، يحدد الإعدادات، وينسق بين مكونات النظام.",
        },
        {
          title: "Dream Parser",
          text: "يحلل نص الحلم لاستخراج الرموز، الأفعال، المشاعر، الأشخاص، الأماكن، والألوان.",
        },
        {
          title: "Symbol Index",
          text: "يربط الرموز بمرادفاتها واحتمالاتها، مثل: حية، ثعبان، أفعى، أو بحر، ماء، غرق.",
        },
        {
          title: "Vector Search",
          text: "يبحث داخل المقاطع المفهرسة عن النصوص الأقرب دلاليًا وسياقيًا للحلم.",
        },
        {
          title: "Knowledge Base",
          text: "كتب JSON بعد تنظيفها، إضافة metadata لها، وتقسيمها إلى chunks قابلة للاسترجاع.",
        },
        {
          title: "LLM",
          text: "يصيغ تفسيرًا منظمًا بناءً على الحلم والمقاطع المسترجعة، لا بناءً على التخمين وحده.",
        },
        {
          title: "Safety Layer",
          text: "تراجع الإجابة لمنع الجزم، التخويف، الادعاء بالغيب، أو النصائح المؤذية.",
        },
      ],
      output: {
        title: "Final Answer",
        text: "تفسير احتمالي واضح، موثّق، ويحترم حساسية المجال.",
      },
      stack: ["React", "Django أو FastAPI", "PostgreSQL", "pgvector أو Qdrant", "Embeddings", "LLM", "Safety Guardrails", "Metadata Layer"],
      takeaway:
        "الخلاصة: هذه البنية تجعل المعرفة خارج النموذج وقابلة للتحديث، بينما يستخدم LLM لصياغة الإجابة وربطها بالسياق.",
    },
    roadmap: {
      title: "خارطة التنفيذ",
      now: "الآن",
      later: "لاحقًا",
      steps: [
        { title: "تنظيف الكتب", track: "now" },
        { title: "إضافة البيانات الوصفية (metadata)", track: "now" },
        { title: "تقسيم النصوص", track: "now" },
        { title: "بناء فهرس الرموز", track: "now" },
        { title: "إنشاء البحث المتجهي", track: "now" },
        { title: "بناء API التفسير", track: "now" },
        { title: "السلامة ونسبة المصادر", track: "now" },
        { title: "اختبار الجودة", track: "now" },
        { title: "جمع ملاحظات المستخدمين", track: "now" },
        { title: "Fine-tuning لاحقًا", track: "later" },
      ],
    },
    final: {
      title: "القرار التقني النهائي",
      statement: "لا ندرّب نموذجًا من الصفر الآن.",
      selected: "",
      reason: "البيانات الحالية ممتازة للاسترجاع والتوليد المبني على المصادر، لكنها غير كافية لتدريب نموذج مستقل وموثوق.",
      closing: "ابنِ محرك المعرفة أولًا. درّب النموذج لاحقًا فقط عندما تصبح الداتا جاهزة فعلًا.",
      badge: "",
      future: "",
      cta1: "",
      cta2: "",
    },
  },
}
