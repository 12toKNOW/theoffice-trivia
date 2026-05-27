// ============================================================
//  THE OFFICE TRIVIA — QUESTION BANK
//  Scoring: Easy = 1 pt | Medium = 3 pts | Hard = 5 pts
//  Each question is tied to a specific episode for source verification.
// ============================================================

const QUESTIONS = [
  // ─────────── EASY (1 point) ───────────
  {
    id: 1, difficulty: "easy", points: 1,
    q: "What's the name of the paper company at the center of the show?",
    choices: ["Dunder Mifflin", "Sabre", "Vance Refrigeration", "Schrute Farms"],
    answer: 0,
    episode: "Established in S1E1 — \"Pilot\""
  },
  {
    id: 2, difficulty: "easy", points: 1,
    q: "In what Pennsylvania city is the branch located?",
    choices: ["Pittsburgh", "Scranton", "Philadelphia", "Harrisburg"],
    answer: 1,
    episode: "Recurring setting — established from S1E1 \"Pilot.\""
  },
  {
    id: 3, difficulty: "easy", points: 1,
    q: "Who plays Michael Scott?",
    choices: ["Will Ferrell", "Steve Carell", "Bob Odenkirk", "Rainn Wilson"],
    answer: 1,
    episode: "Seasons 1–7 lead role."
  },
  {
    id: 4, difficulty: "easy", points: 1,
    q: "What is Dwight's last name?",
    choices: ["Schrute", "Halpert", "Bratton", "Howard"],
    answer: 0,
    episode: "Established in S1E1 \"Pilot.\""
  },
  {
    id: 5, difficulty: "easy", points: 1,
    q: "What kind of farm does Dwight own and operate as a side business?",
    choices: ["A dairy farm", "A beet farm and bed and breakfast", "A pig farm", "An apple orchard"],
    answer: 1,
    episode: "Recurring — Schrute Farms is featured prominently in S4E14 \"Money\" and throughout."
  },
  {
    id: 6, difficulty: "easy", points: 1,
    q: "Who is Jim's longtime crush — and later wife?",
    choices: ["Karen", "Pam", "Erin", "Holly"],
    answer: 1,
    episode: "Series-long relationship established from S1E1 \"Pilot.\""
  },
  {
    id: 7, difficulty: "easy", points: 1,
    q: "Where does Jim propose to Pam?",
    choices: ["The office parking lot", "A gas station in the rain, halfway between Scranton and NYC", "Schrute Farms", "Niagara Falls"],
    answer: 1,
    episode: "S5E1 — \"Weight Loss\""
  },
  {
    id: 8, difficulty: "easy", points: 1,
    q: "Where do Jim and Pam get married?",
    choices: ["Scranton City Hall", "Niagara Falls (on the Maid of the Mist)", "Dunder Mifflin's parking lot", "Las Vegas"],
    answer: 1,
    episode: "S6E4 — \"Niagara\""
  },
  {
    id: 9, difficulty: "easy", points: 1,
    q: "What's the name of Michael's signature catchphrase, repeated whenever someone says something that could be sexual?",
    choices: ["Oh snap!", "That's what she said.", "Boom!", "Classic."],
    answer: 1,
    episode: "Recurring throughout the series; established in early Season 2."
  },
  {
    id: 10, difficulty: "easy", points: 1,
    q: "Who plays Dwight Schrute?",
    choices: ["John Krasinski", "Rainn Wilson", "B.J. Novak", "Ed Helms"],
    answer: 1,
    episode: "Series-long casting fact."
  },
  {
    id: 11, difficulty: "easy", points: 1,
    q: "What is the name of the warehouse worker who later becomes Pam's first fiancé before Jim?",
    choices: ["Roy", "Mark", "Kevin", "Stanley"],
    answer: 0,
    episode: "Recurring from S1E1 \"Pilot\"; engagement ends in S3."
  },
  {
    id: 12, difficulty: "easy", points: 1,
    q: "Which character constantly mentions doing crossword puzzles and seems disengaged from everything except going home?",
    choices: ["Creed", "Stanley", "Toby", "Kevin"],
    answer: 1,
    episode: "Recurring character trait throughout the series."
  },
  {
    id: 13, difficulty: "easy", points: 1,
    q: "Who is the corporate-mandated HR rep that Michael openly dislikes?",
    choices: ["Toby", "Holly", "Jan", "David"],
    answer: 0,
    episode: "Recurring throughout the series; Michael's hatred of Toby is a running gag."
  },
  {
    id: 14, difficulty: "easy", points: 1,
    q: "What instrument does Andy famously play and sing along with?",
    choices: ["Guitar", "Banjo", "Both — but he's most associated with the banjo", "Piano"],
    answer: 2,
    episode: "Recurring — Andy plays both, but the banjo is his signature starting in Season 5."
  },
  {
    id: 15, difficulty: "easy", points: 1,
    q: "Where did Andy go to college (and never stops mentioning)?",
    choices: ["Yale", "Harvard", "Cornell", "Penn"],
    answer: 2,
    episode: "Recurring throughout the series — his Cornell pride is a constant running joke."
  },
  {
    id: 16, difficulty: "easy", points: 1,
    q: "Who is the awkward warehouse worker / forklift operator with a chunky chocolate-chip cookie obsession and a famous chili spill?",
    choices: ["Kevin", "Stanley", "Darryl", "Creed"],
    answer: 0,
    episode: "Recurring — chili spill is in S5E22 \"Casual Friday.\""
  },
  {
    id: 17, difficulty: "easy", points: 1,
    q: "What is the name of Michael's company-bestowed yearly award show?",
    choices: ["The Dundies", "The Scranton Awards", "The Michael Scott Honors", "The Paper Awards"],
    answer: 0,
    episode: "Introduced in S2E1 — \"The Dundies\""
  },
  {
    id: 18, difficulty: "easy", points: 1,
    q: "Who is Michael's first long-term, disastrous girlfriend (corporate VP turned candle entrepreneur)?",
    choices: ["Holly", "Jan", "Carol", "Donna"],
    answer: 1,
    episode: "Recurring relationship S2–S5."
  },
  {
    id: 19, difficulty: "easy", points: 1,
    q: "What is the name of the company that buys Dunder Mifflin in Season 6?",
    choices: ["Staples", "Sabre", "Bridgeport", "Vance"],
    answer: 1,
    episode: "S6E18/19 — \"The Banker\" / \"Sabre\""
  },
  {
    id: 20, difficulty: "easy", points: 1,
    q: "What is Kevin's last name?",
    choices: ["Malone", "Mifflin", "Mason", "Murphy"],
    answer: 0,
    episode: "Established in the cold open / casting throughout the series."
  },

  // ─────────── MEDIUM (3 points) ───────────
  {
    id: 21, difficulty: "medium", points: 3,
    q: "What is the title of the action movie Michael writes, directs, and stars in over a span of 11 years?",
    choices: ["Agent Scarn", "Threat Level Midnight", "Code Name Scranton", "Goldenface"],
    answer: 1,
    episode: "S7E17 — \"Threat Level Midnight\" (script first appears in S2E7 \"The Client\")"
  },
  {
    id: 22, difficulty: "medium", points: 3,
    q: "Who is Michael Scarn's archnemesis in Threat Level Midnight?",
    choices: ["Goldenface (played by Jim)", "Samuel L. Chang (played by Ryan)", "Cherokee Jack", "Dr. Doom"],
    answer: 0,
    episode: "S7E17 — \"Threat Level Midnight\""
  },
  {
    id: 23, difficulty: "medium", points: 3,
    q: "What is the name of Jan's candle business?",
    choices: ["Serenity by Jan", "Jan's Candles", "Wick & Wax", "Jan Levinson Designs"],
    answer: 0,
    episode: "S4E13 — \"Dinner Party\""
  },
  {
    id: 24, difficulty: "medium", points: 3,
    q: "What is the name of the song Jan plays repeatedly at the dinner party — written by her ex-assistant?",
    choices: ["That One Night", "Hunter's Heart", "Forever Yours", "When the Lights Go Down"],
    answer: 0,
    episode: "S4E13 — \"Dinner Party\""
  },
  {
    id: 25, difficulty: "medium", points: 3,
    q: "What does Dwight famously do with the office's CPR dummy?",
    choices: ["Performs a perfect compression count", "Cuts its face off to wear as a mask", "Throws it out the window", "Steals it"],
    answer: 1,
    episode: "S5E14 — \"Stress Relief\""
  },
  {
    id: 26, difficulty: "medium", points: 3,
    q: "What stunt does Dwight pull at the start of \"Stress Relief\" to teach his coworkers about fire safety?",
    choices: ["Sets a small office fire and locks the doors", "Pulls the fire alarm during a fake drill", "Tests fire extinguishers on Kevin", "Burns Michael's foot with a George Foreman grill"],
    answer: 0,
    episode: "S5E14 — \"Stress Relief\" (cold open)"
  },
  {
    id: 27, difficulty: "medium", points: 3,
    q: "How does Michael burn his foot in the famous Season 2 cold open?",
    choices: ["A waffle iron", "A George Foreman grill", "A space heater", "A toaster"],
    answer: 1,
    episode: "S2E12 — \"The Injury\" (he likes bacon waking him up by grilling it next to his bed)"
  },
  {
    id: 28, difficulty: "medium", points: 3,
    q: "Who finally replaces Michael as branch manager near the end of his run (only to disastrously implode and quit)?",
    choices: ["Andy", "Deangelo Vickers", "Robert California", "Nellie Bertram"],
    answer: 1,
    episode: "Season 7 finale arc — Deangelo Vickers played by Will Ferrell, departs in S7E25 \"The Inner Circle.\""
  },
  {
    id: 29, difficulty: "medium", points: 3,
    q: "What is the name of Andy's a cappella group from Cornell?",
    choices: ["Here Comes Treble", "The Pitch-Perfects", "Cornellians", "The Big Reds"],
    answer: 0,
    episode: "Recurring; first appearance S5E18 \"Lecture Circuit, Part 2\" / S6E8 \"Koi Pond.\""
  },
  {
    id: 30, difficulty: "medium", points: 3,
    q: "What is the name of Dwight's notorious cousin who runs the beet farm with him?",
    choices: ["Mose", "Zeke", "Reinhardt", "Heinrich"],
    answer: 0,
    episode: "Recurring — first appears in S4E1 \"Fun Run\" / S4E2 \"Money.\""
  },
  {
    id: 31, difficulty: "medium", points: 3,
    q: "Who is the woman Michael leaves Scranton with at the end of his run?",
    choices: ["Jan", "Holly Flax", "Erin", "Helene"],
    answer: 1,
    episode: "S7E22 — \"Goodbye, Michael\""
  },
  {
    id: 32, difficulty: "medium", points: 3,
    q: "Which Mafia movie does Michael repeatedly reference, often quoting incorrectly?",
    choices: ["Goodfellas", "The Godfather", "Casino", "Scarface"],
    answer: 1,
    episode: "Recurring throughout the series — Michael's Godfather references are a running gag."
  },
  {
    id: 33, difficulty: "medium", points: 3,
    q: "What does Pam's mother (Helene) end up doing that horrifies Pam?",
    choices: ["Dates Michael", "Files a lawsuit", "Moves into Pam's apartment", "Sleeps with Roy"],
    answer: 0,
    episode: "Recurring S6 — culminates in S6E21 \"Happy Hour.\""
  },
  {
    id: 34, difficulty: "medium", points: 3,
    q: "What's the name of the customer service rep who later becomes Andy's girlfriend (and eventually marries Pete)?",
    choices: ["Erin", "Holly", "Pam", "Karen"],
    answer: 0,
    episode: "Recurring from S5 onward — Erin Hannon, played by Ellie Kemper."
  },
  {
    id: 35, difficulty: "medium", points: 3,
    q: "Who is the original branch's accountant trio?",
    choices: ["Angela, Kevin, and Oscar", "Stanley, Phyllis, and Kevin", "Angela, Pam, and Oscar", "Angela, Toby, and Kevin"],
    answer: 0,
    episode: "Recurring set composition throughout the series."
  },
  {
    id: 36, difficulty: "medium", points: 3,
    q: "Who does Angela end up marrying (the second time)?",
    choices: ["Dwight Schrute", "Andy Bernard", "Robert Lipton (the senator)", "Phyllis's nephew"],
    answer: 2,
    episode: "S8E19 — \"Get the Girl\" engagement; she later marries Dwight in the finale."
  },
  {
    id: 37, difficulty: "medium", points: 3,
    q: "What is the name of Michael's small business he briefly runs against Dunder Mifflin?",
    choices: ["The Michael Scott Paper Company", "Scott Paper Co.", "Scranton Office Solutions", "Mifflin & Co."],
    answer: 0,
    episode: "Founded in S5E22 — \"Two Weeks\"; arc concludes in S5E26 \"Casual Friday.\""
  },
  {
    id: 38, difficulty: "medium", points: 3,
    q: "Who plays Robert California, the mysterious CEO of Sabre in Season 8?",
    choices: ["James Spader", "Ed Helms", "Will Ferrell", "Robert De Niro"],
    answer: 0,
    episode: "First appearance S7E24 \"Search Committee\"; recurring throughout Season 8."
  },
  {
    id: 39, difficulty: "medium", points: 3,
    q: "What is the name of the customer that Michael accidentally drives his car into a lake while trying to follow GPS directions?",
    choices: ["He drives into a lake — no specific customer", "Bob Vance", "Christian", "George Foreman"],
    answer: 0,
    episode: "S4E1 — \"Money\" (the GPS-into-the-lake moment)"
  },
  {
    id: 40, difficulty: "medium", points: 3,
    q: "What does Jim wear to the office as a Halloween costume that horrifies HR?",
    choices: ["Three-hole punch Jim (a piece of paper)", "Dwight", "A book on tape", "Just regular clothes"],
    answer: 0,
    episode: "Recurring Halloween joke — \"three-hole punch Jim\" S2E5 \"Halloween.\""
  },
  {
    id: 41, difficulty: "medium", points: 3,
    q: "What is the name of Jim and Pam's first child?",
    choices: ["Cece", "Philip", "Emma", "Sophie"],
    answer: 0,
    episode: "Born in S6E17 — \"The Delivery\""
  },
  {
    id: 42, difficulty: "medium", points: 3,
    q: "Who replaces Michael as regional manager (for real, long-term) starting in Season 8?",
    choices: ["Andy Bernard", "Dwight", "Robert California", "Ryan"],
    answer: 0,
    episode: "Season 8 premiere onward."
  },
  {
    id: 43, difficulty: "medium", points: 3,
    q: "What is Stanley's go-to dessert that he never shares?",
    choices: ["Pretzel Day pretzels", "His birthday pudding", "Chocolate cake", "Donuts"],
    answer: 0,
    episode: "S3E5 — \"Initiation\" (the iconic Pretzel Day scene)"
  },
  {
    id: 44, difficulty: "medium", points: 3,
    q: "What's the name of the office's annual Christmas gift exchange?",
    choices: ["Secret Santa", "Yankee Swap", "Both A and B — they argue about which to use", "Ho Ho Holiday Exchange"],
    answer: 2,
    episode: "S2E10 — \"Christmas Party\""
  },
  {
    id: 45, difficulty: "medium", points: 3,
    q: "Which character runs a side identity-theft scam called Creed Thoughts and has a deeply mysterious backstory?",
    choices: ["Creed Bratton", "Toby Flenderson", "Meredith Palmer", "Phyllis Vance"],
    answer: 0,
    episode: "Recurring throughout the series; the Creed Thoughts blog is referenced in S3E16 \"Business School.\""
  },

  // ─────────── HARD (5 points) ───────────
  {
    id: 46, difficulty: "hard", points: 5,
    q: "What is the name of Dwight's improvised martial-arts discipline?",
    choices: ["Goju-ryu", "Kenpo", "Hapkido", "Goju-Ryu (canonical: senpai under Sensei Ira)"],
    answer: 3,
    episode: "Recurring — Dwight's senpai Ira appears in S3E5 \"Initiation\" / S4E13 references."
  },
  {
    id: 47, difficulty: "hard", points: 5,
    q: "Who plays Holly Flax, Michael's true love?",
    choices: ["Amy Ryan", "Amy Sedaris", "Maya Rudolph", "Tina Fey"],
    answer: 0,
    episode: "First appearance S4E14 — \"Goodbye, Toby.\""
  },
  {
    id: 48, difficulty: "hard", points: 5,
    q: "What's the title of Andy's invented \"nicknames\" he gives himself?",
    choices: ["The Nard Dog", "The Bernard", "The Andy Man", "The Cornell King"],
    answer: 0,
    episode: "Recurring from S3 onward — Nard Dog / Nard-Man is Andy's self-given nickname."
  },
  {
    id: 49, difficulty: "hard", points: 5,
    q: "What is the name of the warehouse worker who later becomes VP of Sabre and Andy's boss?",
    choices: ["Darryl Philbin", "Hank Tate", "Roy Anderson", "Lonny Collins"],
    answer: 0,
    episode: "Recurring; promotion arc in Season 7 and 8."
  },
  {
    id: 50, difficulty: "hard", points: 5,
    q: "Who plays Roy, Pam's original fiancé?",
    choices: ["David Denman", "John Krasinski", "B.J. Novak", "Adam Scott"],
    answer: 0,
    episode: "Recurring from S1E1 \"Pilot\"; engagement ends in Season 3."
  },
  {
    id: 51, difficulty: "hard", points: 5,
    q: "What is the title of the documentary-within-the-show that finally airs in Season 9, revealing the camera crew?",
    choices: ["The Office: An American Workplace", "Scranton Strangler", "The Documentary", "9 Years in the Making"],
    answer: 0,
    episode: "S9 final arc — the in-universe PBS documentary is referenced and airs in Season 9."
  },
  {
    id: 52, difficulty: "hard", points: 5,
    q: "Who is the Scranton Strangler, in Toby's obsessive belief?",
    choices: ["Creed Bratton", "Toby is convinced the wrong man (George Howard Skub) was convicted", "Robert California", "Andy"],
    answer: 1,
    episode: "Season 8 and Season 9 arc — Toby's jury duty plot."
  },
  {
    id: 53, difficulty: "hard", points: 5,
    q: "What is the title of the original British series The Office is based on?",
    choices: ["The Office (UK)", "Working Class", "Slough", "Wernham Hogg"],
    answer: 0,
    episode: "Series creation fact — created by Ricky Gervais and Stephen Merchant, 2001."
  },
  {
    id: 54, difficulty: "hard", points: 5,
    q: "What is the name of Pam's terrible art-school boyfriend (briefly) in Season 4?",
    choices: ["She doesn't have one — Jim is her only boyfriend after Roy", "Brian", "Alex", "Trevor"],
    answer: 0,
    episode: "Distractor — Pam has no other boyfriend between Roy and Jim. Brian is the boom-mic operator in S9."
  },
  {
    id: 55, difficulty: "hard", points: 5,
    q: "What is the name of the boom-mic operator who develops a connection with Pam in Season 9?",
    choices: ["Brian", "Pete", "Clark", "Kyle"],
    answer: 0,
    episode: "S9 — first appearance S9E13 \"Junior Salesman.\""
  },
  {
    id: 56, difficulty: "hard", points: 5,
    q: "Where does Andy take Erin on the cruise that becomes a disaster?",
    choices: ["The Caribbean", "Bermuda", "Three-month boat trip to fix his family's situation", "Hawaii"],
    answer: 2,
    episode: "Season 9 arc — Andy's boat trip in S9E1–S9E5."
  },
  {
    id: 57, difficulty: "hard", points: 5,
    q: "What's the name of Dwight's farm B&B special — a meal of beets cooked in beet juice with a beet on top?",
    choices: ["Beetfest", "Schrute Beet Special", "It's not specifically named — Schrute Farms B&B serves all-beet menus", "Beets Bourguignon"],
    answer: 2,
    episode: "S4E2 — \"Money\" (the Schrute Farms B&B episode)"
  },
  {
    id: 58, difficulty: "hard", points: 5,
    q: "Which guest-star comedian plays Deangelo Vickers, Michael's replacement?",
    choices: ["Will Ferrell", "Ricky Gervais", "Jim Carrey", "James Spader"],
    answer: 0,
    episode: "S7E21 — \"Training Day\" through S7E25 \"The Inner Circle.\""
  },
  {
    id: 59, difficulty: "hard", points: 5,
    q: "What is the name of the woman Dwight loves throughout the series — the office accountant?",
    choices: ["Angela Martin", "Phyllis Vance", "Meredith Palmer", "Erin Hannon"],
    answer: 0,
    episode: "Recurring relationship from Season 2 onward; they marry in the finale."
  },
  {
    id: 60, difficulty: "hard", points: 5,
    q: "What is the title of the song Andy sings at his wedding to Angela (before it falls apart)?",
    choices: ["Andy's wedding doesn't happen — Angela marries Senator Lipton, then Dwight", "Sweet Caroline", "Take It Easy", "He sings nothing"],
    answer: 0,
    episode: "Distractor — Andy and Angela's engagement ends; she does not marry him on screen."
  },
  {
    id: 61, difficulty: "hard", points: 5,
    q: "What is the name of Toby's daughter, who lives with her mom?",
    choices: ["Sasha", "Cece", "Anna", "Olivia"],
    answer: 0,
    episode: "Recurring — established in early seasons; Toby's family situation is part of his sad-sack characterization."
  },
  {
    id: 62, difficulty: "hard", points: 5,
    q: "What is the title of the song Michael memorably belts out into a microphone during karaoke at Chili's in the Season 2 premiere?",
    choices: ["Tiny Dancer", "Goodbye, My Lover", "Islands in the Stream", "He doesn't sing — it's the Dundies that night"],
    answer: 2,
    episode: "S2E1 — \"The Dundies\" (Michael and Pam sing \"Islands in the Stream\"; iconic moment)"
  },
  {
    id: 63, difficulty: "hard", points: 5,
    q: "Who plays Karen Filippelli, Jim's brief Stamford-branch girlfriend?",
    choices: ["Rashida Jones", "Mindy Kaling", "Aubrey Plaza", "Ellie Kemper"],
    answer: 0,
    episode: "Recurring S3 — first appearance S3E1 \"Gay Witch Hunt.\""
  },
  {
    id: 64, difficulty: "hard", points: 5,
    q: "What is the name of the Stamford-branch character who joins Scranton along with Andy?",
    choices: ["Tony Gardner", "Hannah Smoterich-Barr", "Karen, Andy, Hannah, Tony — multiple", "Just Andy"],
    answer: 2,
    episode: "S3 merger arc — multiple Stamford employees join Scranton; most leave shortly after."
  },
  {
    id: 65, difficulty: "hard", points: 5,
    q: "What is Michael's chosen last name when going by his alter-ego \"Prison Mike\" to teach the gang about prison life?",
    choices: ["Mike (just Mike)", "Prison Mike", "Mike Yard", "He doesn't use a last name"],
    answer: 1,
    episode: "S3E9 — \"The Convict\" (Prison Mike's costume + do-rag scene)"
  }
];
