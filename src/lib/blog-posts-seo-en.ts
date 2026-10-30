import type { Article } from "./blog-posts";

// "Crashes / disk / tools" cluster (EN). French originals in blog-posts-seo-fr.ts.
export const seoEnArticles: Article[] = [
  {
    slug: "windows-11-blue-screen-fix",
    lang: "en",
    traduction: "ecran-bleu-windows-11",
    title: "Windows 11 Blue Screen: How to Read the Error Code and Fix the Cause",
    seoTitle: "Windows 11 blue screen: causes, error code and fixes",
    excerpt:
      "A blue screen is scary, but it is a protection, not a death sentence. How to read the stop code, the 6 most common causes and the method to find yours.",
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "A blue screen on Windows 11 is a protective measure: Windows stops on purpose because it detected an error it cannot safely fix without risking your files. In most cases the cause is a faulty driver, a damaged system file or failing memory, and it can be fixed without replacing the computer.",
      },
      {
        type: "p",
        text: "The scenario is always the same: everything works, then the screen turns blue with a sad face, a cryptic error code, and the computer restarts. The worst part is the uncertainty: is it a one-off accident or the start of a breakdown? Depending on your Windows 11 version, the screen may even appear black rather than blue: it is the same mechanism.",
      },
      { type: "h2", text: "In short: 3 questions to ask yourself" },
      {
        type: "ol",
        items: [
          "Did it happen only once? An isolated blue screen is nothing alarming: restart, let Windows update and keep an eye on it.",
          "Did it happen right after an update, or after installing a driver or program? Then the cause is almost certain: undo that change.",
          "Does it keep happening, even with nothing new? Note the error code and follow the method below: the cause is probably hardware (memory, disk, heat).",
        ],
      },
      { type: "h2", text: "What does a blue screen mean, and what does the code say?" },
      {
        type: "p",
        text: "When the core of Windows hits a situation it cannot handle, for instance a driver writing to the wrong place in memory, it prefers to stop everything rather than risk damaging your data. It then shows a stop code in capital letters and restarts. That code is your best lead: it points to the family of cause.",
      },
      {
        type: "ul",
        items: [
          "DRIVER_IRQL_NOT_LESS_OR_EQUAL, SYSTEM_SERVICE_EXCEPTION, KERNEL_SECURITY_CHECK_FAILURE: a faulty driver or system software. Think about what was installed or updated recently.",
          "MEMORY_MANAGEMENT, PAGE_FAULT_IN_NONPAGED_AREA: RAM (a failing module) or a driver misusing it.",
          "CRITICAL_PROCESS_DIED, INACCESSIBLE_BOOT_DEVICE, NTFS_FILE_SYSTEM: damaged system files or a struggling disk.",
          "DPC_WATCHDOG_VIOLATION, CLOCK_WATCHDOG_TIMEOUT: a component stopped responding in time, often a storage or graphics driver.",
        ],
      },
      {
        type: "p",
        text: "The code alone is not a diagnosis: the same code can have several origins. But it stops you from going in every direction. If you did not have time to read it, Windows keeps it on record, as we will see below.",
      },
      {
        type: "p",
        text: "On Windows 11, the screen shows a message such as \"Your device ran into a problem\" with a rising percentage, a QR code and the stop code at the bottom. The restart is automatic, which is handy but sometimes stops you from reading the code. To keep it on screen, open Advanced system settings > Startup and Recovery, then untick \"Automatically restart\". At the next crash, the screen will stay up and you will have time to note or photograph the code.",
      },
      {
        type: "p",
        text: "The QR code leads to a general Microsoft help page. It is rarely more useful than the stop code itself: that is the one you will search for, adding your computer's model.",
      },
      { type: "h2", text: "The 6 most common causes of a blue screen" },
      { type: "h3", text: "1. A faulty or incompatible driver" },
      {
        type: "p",
        text: "This is the number one cause. A driver is a small program that lets Windows talk to a component (graphics card, Wi-Fi, storage). A badly written, outdated or wrongly installed driver crashes the whole system. Graphics and network drivers are the most frequent culprits after an update.",
      },
      { type: "h3", text: "2. A Windows update that went wrong" },
      {
        type: "p",
        text: "An update can replace a driver without warning or leave files half installed. If blue screens start on the day of an update, uninstalling it (Settings > Windows Update > Update history > Uninstall updates) is the first thing to try.",
      },
      { type: "h3", text: "3. Failing RAM" },
      {
        type: "p",
        text: "A memory module that makes errors causes seemingly random blue screens, with a different code each time. That is the classic sign: if the codes change from one crash to the next, think memory. Windows includes a test tool (Windows Memory Diagnostic, launched by typing mdsched in search).",
      },
      { type: "h3", text: "4. Damaged system files" },
      {
        type: "p",
        text: "After a power cut, a forced shutdown or a struggling disk, Windows files can be corrupted. Two commands, run in an administrator command prompt, fix them in most cases: sfc /scannow, then DISM /Online /Cleanup-Image /RestoreHealth.",
      },
      { type: "h3", text: "5. A disk reaching the end of its life" },
      {
        type: "p",
        text: "A disk that struggles to read its data crashes Windows, especially at startup. If the blue screen appears during boot, or comes with slowdowns and freezes, check the disk's health before anything else. Our guide to the signs of a failing hard drive explains how.",
      },
      { type: "h3", text: "6. Heat" },
      {
        type: "p",
        text: "An overheating processor or graphics card can cause crashes, often under load (gaming, video editing, a big update). If the fan races just before the blue screen, the cooling lead is serious: dust, worn thermal paste or blocked airflow.",
      },
      {
        type: "p",
        text: "A word on drivers, the first lead. For the graphics card, download the driver straight from its maker's site (NVIDIA, AMD or Intel) rather than through third-party software. For everything else, Windows Update sometimes offers \"optional updates\" (Settings > Windows Update > Advanced options) containing newer drivers. Beware of programs promising to update all your drivers in one click: they regularly install the wrong one, and that is a good way to create a blue screen rather than fix one.",
      },
      {
        type: "p",
        text: "If you suspect memory and the computer has several modules, remove one and test with the other, then swap. A faulty module causes the crashes, the other does not. Always switch off and unplug the computer before opening the case, and touch a metal part to discharge static electricity.",
      },
      { type: "h2", text: "How to find the cause yourself, step by step" },
      {
        type: "ol",
        items: [
          "Note the stop code, by photographing the screen at the next crash, or find it in Event Viewer (Windows Logs > System, event 1001 or 41).",
          "Think back to the latest change: update, new driver, new program, new device plugged in. Unplug unnecessary devices (USB stick, printer, external drive).",
          "Uninstall the recent update or driver, or use System Restore to go back a few days.",
          "Run sfc /scannow then DISM /Online /Cleanup-Image /RestoreHealth to repair system files.",
          "Test memory with Windows Memory Diagnostic, then check the disk's health.",
          "If the crash prevents booting, use Safe Mode (hold Shift while clicking Restart) to carry out these checks.",
        ],
      },
      {
        type: "p",
        text: "Windows also saves a dump file at each crash, in C:\\Windows\\Minidump. Free tools can read it and often name the faulty driver. It is valuable help when the stop code is too vague.",
      },
      {
        type: "p",
        text: "To avoid living through this again, two habits are worth it. The first is to let Windows create restore points before major updates, which lets you roll back in minutes. The second is to back up your files regularly: a blue screen is rarely dangerous for data, but a failing disk always is.",
      },
      { type: "h2", text: "When should you worry, and when should you reinstall Windows?" },
      {
        type: "ul",
        items: [
          "A single blue screen, then nothing for weeks: do nothing special, just keep Windows and drivers up to date.",
          "Several blue screens a week, with different codes: test memory and disk, this is the profile of a hardware problem.",
          "Blue screens at every startup: back up your files without waiting, the disk may be at fault.",
          "Resetting Windows (Settings > System > Recovery) is the heaviest solution: it fixes a software problem but changes nothing for a failing memory module or disk.",
        ],
      },
      {
        type: "p",
        text: "In almost none of these cases is the computer \"fit for the bin\": a memory module costs a few tens of euros to replace, so does a disk, and most blue screens come from a driver.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale reads the Windows log for you: how many sudden shutdowns and crashes occurred over the last 30 days, and whether a disk health warning is flagged. It cross-checks these clues with what is occupying the computer, then names the probable cause. See our dedicated [Windows PC crash analyzer and Kernel-Power 41 diagnostic](/diagnostic-crash-pc) in plain English. When the problem is hardware, it tells you frankly rather than sending you chasing a useless setting.",
      },
    ],
    faq: [
      {
        q: "Does a blue screen mean my PC is dead?",
        r: "No. It is a protection: Windows stops to avoid damaging your files. Most blue screens come from a driver or an update and are fixed without replacing the computer.",
      },
      {
        q: "Why do I get a blue screen for no apparent reason?",
        r: "With no recent change, the suspects are RAM, the disk and heat. If the error codes vary from one crash to another, memory is the first lead.",
      },
      {
        q: "Can I lose my files because of a blue screen?",
        r: "Rarely: the very purpose of a blue screen is to protect data. The real risk concerns a failing disk, hence the value of backing up as soon as crashes repeat.",
      },
      {
        q: "Where can I find the code of a past blue screen?",
        r: "In Event Viewer, Windows Logs > System: event 1001 (BugCheck) gives the stop code, and event 41 (Kernel-Power) flags the unexpected restart.",
      },
      {
        q: "Can Nyctale fix a blue screen?",
        r: "Nyctale spots the signs in the Windows log and names the probable cause. When it is software, it guides you through the fix; when it is hardware, it says so, because no software replaces a memory module or a disk.",
      },
    ],
    liens: ["failing-hard-drive-signs", "slow-computer-no-obvious-reason", "fan-that-never-stops-spinning", "pc-restarts-by-itself"],
  },
  {
    slug: "failing-hard-drive-signs",
    lang: "en",
    traduction: "disque-dur-va-lacher-signes",
    title: "How to Tell If Your Hard Drive Is Failing: Warning Signs and the SMART Test",
    seoTitle: "Failing hard drive: warning signs, SMART test and what to do",
    excerpt:
      "A drive rarely warns you before it dies, but it leaves clues. The signs to watch, how to read SMART health for free and what to do first: back up.",
    image: { src: "/images/blog/nyctale-disque-dur-signes-en.jpg", alt: "Hard drive about to fail: the warning signs : 7 signs that should alert you — Slowdowns with no software cause ; Clicking or grinding noises ; Unreadable or corrupted files ; Blue screens, crashes at startup ; A SMART alert ; + 2 more signs" },
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "A hard drive or SSD that is about to fail almost always leaves signs before the breakdown: unexplained slowdowns, freezes, files that no longer open, clicking noises on a mechanical drive, or errors reported by the SMART monitoring tool. The right reaction is not to repair, but to back up your files immediately.",
      },
      {
        type: "p",
        text: "When a drive dies, what you lose is not settings but your photos, your documents and years of files. Spotting the early signs and checking the drive's health in a few minutes can spare you a real disaster. Here is how, without paid software.",
      },
      { type: "h2", text: "In short: the golden rule" },
      {
        type: "ol",
        items: [
          "A single suspicious sign (slowdowns, noise, unreadable files) justifies backing up right now, before any diagnosis.",
          "SMART status can be read for free in a few minutes; a \"Caution\" or \"Bad\" alert should be taken seriously.",
          "A failing drive cannot be repaired: it is replaced, after copying your data.",
        ],
      },
      { type: "h2", text: "The 7 signs that should alert you" },
      { type: "h3", text: "1. Slowdowns with no software cause" },
      {
        type: "p",
        text: "The disk is slow to respond, the computer freezes for a few seconds when opening a folder, the disk indicator in Task Manager stays at 100% with no demanding program. This symptom has many causes, but a drive struggling to read its data is one of them.",
      },
      { type: "h3", text: "2. Clicking, grinding or odd whirring noises" },
      {
        type: "p",
        text: "On a mechanical hard drive, repeated clicks or a grinding sound often point to a read-head or motor problem. If you hear such a noise, stop using the drive as much as possible and copy the essentials without delay. SSDs are silent and do not give this signal.",
      },
      { type: "h3", text: "3. Files that become unreadable or corrupted" },
      {
        type: "p",
        text: "A document that no longer opens, a half-displayed photo, an archive flagged as corrupt: if this affects several files for no reason, the disk may have bad sectors.",
      },
      { type: "h3", text: "4. Blue screens or crashes at startup" },
      {
        type: "p",
        text: "Recurring blue screens, especially at startup, can come from a struggling disk. Our article on the Windows 11 blue screen explains how to tell this case from a simple faulty driver.",
      },
      { type: "h3", text: "5. A very slow boot or a disappearing disk" },
      {
        type: "p",
        text: "A computer that takes several minutes to start, or a secondary drive that vanishes from Explorer and comes back, often signals a read or connection problem. Also consider the cable or USB port before condemning the drive.",
      },
      { type: "h3", text: "6. Errors during a disk check" },
      {
        type: "p",
        text: "If the Windows check tool (chkdsk) reports bad sectors or repeated errors, the drive is ageing badly. A one-off error on a file can be fixed; errors that keep coming back are a bad sign.",
      },
      { type: "h3", text: "7. A SMART alert" },
      {
        type: "p",
        text: "This is the most objective sign, explained in the next section. It can appear before any visible symptom.",
      },
      {
        type: "p",
        text: "A detail on interpreting the values. SMART attributes show a \"raw\" value and a \"normalised\" value that the manufacturer lowers as health degrades. What matters is not the value itself but its trend: a reallocated-sector counter going from 0 to 8 then to 40 within a few weeks is far more worrying than a counter steady at 8 for two years. So record the status once, then re-check from time to time to see the trend.",
      },
      { type: "h2", text: "What is SMART, and how do you read it for free?" },
      {
        type: "p",
        text: "SMART is a self-monitoring system built into almost every hard drive and SSD. The drive constantly measures its own condition (reallocated sectors, read errors, temperature, wear) and can flag that it is in poor health. It is not infallible: a drive can fail without a SMART alert, and an alert does not mean immediate failure. But it is the best indicator available.",
      },
      {
        type: "p",
        text: "To read it, the simplest method is a free utility such as CrystalDiskInfo: it shows the overall status (Good, Caution, Bad) and the detail of each attribute. Windows also provides a summary health state: in PowerShell, the Get-PhysicalDisk command reports \"Healthy\", \"Warning\" or \"Unhealthy\" for each disk.",
      },
      {
        type: "ul",
        items: [
          "Reallocated sectors: the drive had to replace defective areas. A few are normal, a fast rise is worrying.",
          "Pending and uncorrectable sectors: areas the drive can no longer read. This is a serious signal.",
          "Temperature: a drive that is regularly too hot ages faster.",
          "For an SSD: the wear percentage and the remaining spare level show how much life the drive has left.",
        ],
      },
      {
        type: "p",
        text: "If the drive is already badly affected, to the point of not starting or no longer being recognised, caution changes nature. Avoid plugging it in again and again: each attempt can make things worse. A lab data recovery service can sometimes save files, but it generally costs several hundred euros, which makes preventive backup infinitely more cost-effective.",
      },
      {
        type: "p",
        text: "If the drive makes noises, do not shake it, do not put it in the freezer (a persistent myth) and never open a mechanical hard drive: dust alone is enough to destroy it. Copy what you can, starting with the most precious files rather than the largest, because if the drive dies mid-copy you will at least have saved the essentials.",
      },
      { type: "h2", text: "What to do if the drive shows signs of weakness" },
      {
        type: "ol",
        items: [
          "Back up first. Copy your important files (photos, documents, mail) to an external drive or online storage. Do it before any check that stresses the drive.",
          "Avoid heavy operations: defragmentation, full scans, reinstalling. They make the drive work hard and can hasten failure.",
          "Check the cable and port if the drive is external, before concluding it has failed.",
          "If the alert is confirmed, replace the drive. A 500 GB SSD generally costs between €40 and €70, a modest expense compared with losing your data.",
          "To change drives without reinstalling everything, a cloning tool copies the old drive to the new one, system included.",
        ],
      },
      {
        type: "p",
        text: "Keep in mind that a good backup follows the 3-2-1 rule: three copies of your data, on two different media, one of them off-site. A single copy on the computer's own drive is not a backup.",
      },
      {
        type: "p",
        text: "For an SSD, the lifespan quoted by manufacturers is expressed in amount of data written. Office or family use almost never approaches the limit: SSD failures more often come from a controller or firmware fault than from cell wear. That is why an SSD can look perfectly healthy by SMART, then vanish all at once. Here again, backup remains the only real protection.",
      },
      {
        type: "p",
        text: "External drives deserve the same attention. An external drive that is moved often, unplugged without ejecting and dropped now and then lives more dangerously than an internal one. If your only copies of family photos are on such a drive, it is time to make a second copy.",
      },
      { type: "h2", text: "Hard drive or SSD: which ages better?" },
      {
        type: "p",
        text: "A mechanical hard drive is sensitive to shocks and to wear of its moving parts. It sometimes warns through noise, but also fails without notice. An SSD has no moving parts and resists shocks better, but its wear depends on the volume of data written, and a failure can be sudden. In both cases, SMART monitoring and backups are essential.",
      },
      {
        type: "p",
        text: "A mechanical drive more than four or five years old that slows the computer is a good candidate for replacement with an SSD: the machine regains its snap, and you reduce the risk of failure.",
      },
      { type: "h2", text: "What Nyctale checks in 19 seconds" },
      {
        type: "p",
        text: "Nyctale asks Windows for the health state of your drives and clearly flags if one is in warning. It cross-checks this with recent crashes and disk activity, to tell a simple software slowdown from a real hardware problem. If the drive is at fault, it tells you frankly: no software repairs a wearing drive, you need to back up and replace it.",
      },
    ],
    faq: [
      {
        q: "How do I know if my hard drive is dying?",
        r: "Watch for unexplained slowdowns, freezes, corrupted files, clicking noises and SMART alerts. A single sign is already reason enough to back up your files.",
      },
      {
        q: "How can I check my drive's SMART status for free?",
        r: "With a free utility such as CrystalDiskInfo, which shows Good, Caution or Bad. In PowerShell, the Get-PhysicalDisk command also reports health (Healthy, Warning, Unhealthy).",
      },
      {
        q: "Can a drive fail with no signs at all?",
        r: "Yes, especially SSDs, whose failure can be sudden. That is why regular backups matter more than monitoring.",
      },
      {
        q: "Can a failing hard drive be repaired?",
        r: "Not durably. Software errors can be fixed, but a drive accumulating bad sectors must be replaced after backing up your data.",
      },
      {
        q: "How much does replacing a drive cost?",
        r: "A 500 GB SSD generally costs between €40 and €70. At a repair shop, add fitting and possibly cloning or a Windows reinstall.",
      },
    ],
    liens: ["windows-11-blue-screen-fix", "disk-100-percent-windows", "slow-pc-startup", "pc-restarts-by-itself"],
  },
  {
    slug: "best-free-pc-diagnostic-tools",
    lang: "en",
    traduction: "meilleurs-logiciels-gratuits-diagnostic-pc",
    title: "The Best Free PC Diagnostic Tools (and What to Expect From Them)",
    seoTitle: "Best free PC diagnostic tools: our selection",
    excerpt:
      "The best free PC diagnostic tools: our selection to test CPU, RAM, disk health and temperature, plus the strengths and limitations of each software.",
    date: "2026-10-01",
    readMin: 9,
    blocks: [
      {
        type: "p",
        text: "To diagnose a PC for free, you already have a good part of the tools in Windows: Task Manager, Resource Monitor, Event Viewer and Memory Diagnostic. A few free utilities such as CrystalDiskInfo, HWiNFO or Autoruns complete the toolbox for the disk, temperatures and startup.",
      },
      {
        type: "p",
        text: "The choice is vast, and many programs promise to \"optimise\" or \"repair\" your PC in one click. The truth is more modest: a good diagnosis means asking the right question of each component, then interpreting the answer. Here are the tools worth your time, what they measure and their limits.",
      },
      { type: "h2", text: "In short: which tool for which symptom?" },
      {
        type: "ol",
        items: [
          "Slow or freezing PC: Task Manager, then Resource Monitor.",
          "Blue screens or restarts: Event Viewer and Windows Memory Diagnostic.",
          "Suspicion about the disk: CrystalDiskInfo.",
          "Noisy fan or overheating: HWiNFO to read temperatures.",
          "Slow startup: Autoruns, or the Startup apps tab in Task Manager.",
        ],
      },
      {
        type: "p",
        text: "Before opening any tool, think about method: a good diagnosis goes from the simplest to the most technical, and from the most frequent to the rarest. So you start by looking at what occupies the processor, memory and disk, then consult the event log if the problem left traces, and only then bring out specialised tools for the disk, temperatures or memory. This order avoids spending an hour on a memory test when a stuck program was the real culprit.",
      },
      { type: "h2", text: "The tools already built into Windows" },
      { type: "h3", text: "Task Manager" },
      {
        type: "p",
        text: "Opened with Ctrl + Shift + Esc, it shows live what is occupying the processor, memory, disk and network. Sorting by column points to the program behind a slowdown in seconds. It is the first tool to open, and it is enough in a large share of cases.",
      },
      { type: "h3", text: "Resource Monitor" },
      {
        type: "p",
        text: "Reached from the Performance tab of Task Manager, it details disk and memory activity file by file. Useful when the disk is saturated at 100%: it shows which program is reading or writing.",
      },
      { type: "h3", text: "Event Viewer" },
      {
        type: "p",
        text: "This is Windows' logbook. It records crashes, sudden shutdowns, thermal throttling of the processor and disk errors. It is very rich but austere: you need to know what to look for, for instance event 41 for an unexpected restart.",
      },
      { type: "h3", text: "Windows Memory Diagnostic" },
      {
        type: "p",
        text: "Launched by typing mdsched in search, it tests RAM at the next restart. Valuable when blue screens show varying codes. A full multi-pass test is more reliable than a quick one.",
      },
      { type: "h3", text: "Windows Security" },
      {
        type: "p",
        text: "It includes an antivirus and a device health check. For most home users it is enough: a second antivirus often slows things more than it protects.",
      },
      {
        type: "p",
        text: "To interpret HWiNFO, a few benchmarks help. At idle, a processor generally sits between 35 and 60 °C depending on the machine and season. Under heavy load, values near 90 °C or above are too high and can trigger protective throttling. A sharp gap between idle and load, with a very fast rise, often suggests worn thermal paste or a clogged heatsink. These benchmarks are indicative: the normal range depends on the model.",
      },
      {
        type: "p",
        text: "Windows also offers a \"Reliability Monitor\", reached by typing perfmon /rel in search. It shows application crashes, failed updates and abnormal shutdowns on a timeline, day by day. It is one of the least known tools and one of the most telling for understanding when a problem started.",
      },
      { type: "h2", text: "Free utilities that complete the toolbox" },
      {
        type: "ul",
        items: [
          "CrystalDiskInfo: reads SMART status of drives and SSDs (Good, Caution, Bad). Simple and reliable for monitoring wear.",
          "HWiNFO: shows sensors, temperatures, frequencies and voltages. Useful to confirm overheating, but dense: it is easy to drown in it.",
          "Autoruns (Microsoft Sysinternals): lists everything that starts with Windows, including entries Task Manager does not show. Powerful, to be handled with care.",
          "Process Explorer (Sysinternals): a very detailed Task Manager that shows which program each process belongs to.",
          "MemTest86: a very thorough memory test, run from a USB stick, for cases where the built-in test does not settle it.",
          "CrystalDiskMark: measures drive speed, useful to compare before and after a drive change.",
        ],
      },
      {
        type: "p",
        text: "One precaution: download these tools only from their publisher's own site. Search engines sometimes show fake download pages at the top, stuffed with unwanted software.",
      },
      { type: "h2", text: "\"Cleaners\" and \"optimisers\": best avoided" },
      {
        type: "p",
        text: "Programs that promise to \"boost\" your PC in one click are rarely useful. Windows already includes disk cleanup and startup management. Many of these programs run in the background themselves and push you to buy a paid version after displaying hundreds of harmless \"problems\". A registry clean-up has practically no measurable effect on speed.",
      },
      {
        type: "p",
        text: "The right reflex is the opposite: first understand the cause, then act. A diagnosis that names a precise culprit is worth more than a blind clean-up.",
      },
      {
        type: "p",
        text: "Some manufacturers supply their own diagnostic tools (Dell, HP, Lenovo, ASUS). They are useful for testing the components specific to your model, but they often ship with commercial offers or notifications. Use them if they serve you, without granting them more permissions than needed.",
      },
      {
        type: "p",
        text: "Keep an eye on privacy too. A diagnostic tool reads a lot of information about your machine. Prefer well-known publishers, download from their official site, and check what is sent online if the program talks to a server.",
      },
      { type: "h2", text: "The limits of free tools" },
      {
        type: "p",
        text: "Each tool answers a precise question, but none says \"here is why your PC is slow\". It is up to you to cross-check results: a calm Task Manager with a disk at 100%, an event log reporting thermal throttling, a SMART status in warning. Reading these clues takes experience, and free tools do not supply it.",
      },
      {
        type: "p",
        text: "Time is the other limit: opening five programs, noting values, looking up what a code means easily takes an hour for someone not used to it. This cross-checking work is precisely what Nyctale aims to automate.",
      },
      { type: "h2", text: "What Nyctale does in 19 seconds" },
      {
        type: "p",
        text: "Nyctale queries the same sources as these tools (processes, Windows log, drive health) and cross-checks them to name the probable cause in plain language. See our dedicated [Windows PC crash analyzer and Kernel-Power 41 diagnostic](/diagnostic-crash-pc). The analysis is free; the full version, which guides the fix, costs €24.99 once, with no subscription. When the problem is hardware, it tells you rather than sending you chasing a setting.",
      },
      {
        type: "p",
        text: "Related reading: [before reformatting your PC, what a diagnostic can save you](/blog/before-reformatting-your-pc-what-a-diagnostic-can-save-you).",
      },
    ],
    faq: [
      {
        q: "What is the best free software to diagnose a PC?",
        r: "There is no single one: Task Manager for slowdowns, CrystalDiskInfo for the disk, HWiNFO for temperatures and Windows Memory Diagnostic for RAM. Each answers a precise question.",
      },
      {
        q: "Can I diagnose a PC without installing anything?",
        r: "Largely yes: Task Manager, Resource Monitor, Event Viewer and Memory Diagnostic are already in Windows.",
      },
      {
        q: "Are PC cleaning programs useful?",
        r: "Rarely. Windows already does the essentials, and many of these programs push a paid version after exaggerating the problems found.",
      },
      {
        q: "How do I test my PC's RAM?",
        r: "Type mdsched in Windows search and run the test at restart. For a deeper test, MemTest86 runs from a USB stick.",
      },
      {
        q: "How does Nyctale differ from these tools?",
        r: "It cross-checks several sources (processes, Windows log, drive health) to name a probable cause in plain language, instead of leaving you to interpret numbers and codes. The analysis is free, the full version costs €24.99 once.",
      },
    ],
    liens: ["windows-11-blue-screen-fix", "failing-hard-drive-signs", "slow-computer-no-obvious-reason", "before-reformatting-your-pc-what-a-diagnostic-can-save-you"],
  },
  {
    slug: "is-my-pc-compatible-with-windows-11",
    lang: "en",
    traduction: "mon-pc-est-il-compatible-windows-11",
    title: "Is My PC Compatible With Windows 11? How to Check",
    seoTitle: "Is My PC Compatible With Windows 11? How to Check",
    excerpt:
      "Processor, TPM, Secure Boot, memory, storage: the official Windows 11 requirements and a five-minute way to check your PC.",
    image: { src: "/images/blog/nyctale-compatibilite-windows-11-en.png", alt: "The 5 things to check before moving to Windows 11: processor, TPM 2.0, Secure Boot, memory and storage, UEFI boot" },
    date: "2026-10-14",
    readMin: 3,
    blocks: [
      {
        type: "p",
        text: "To find out whether your PC is compatible with Windows 11, compare it with Microsoft's official requirements: a supported processor, a TPM 2.0 chip, Secure Boot, and enough memory and storage. Microsoft offers a free tool that runs this check, and the official specifications page remains the reference, since exact requirements should be confirmed at the source.",
      },
      {
        type: "p",
        text: "Many perfectly healthy PCs are refused the upgrade, often for an easy-to-fix reason, sometimes because of a hardware limit. This article explains what Windows 11 asks for, how to test your machine and what to do with the verdict. Exact values are on the [Windows 11 specifications page](https://www.microsoft.com/windows/windows-11-specifications), which we invite you to read.",
      },
      { type: "h2", text: "Which requirements should you check?" },
      {
        type: "p",
        text: "The points that block most often:",
      },
      {
        type: "ul",
        items: [
          "The processor: it must be on Microsoft's list of supported ones",
          "TPM 2.0: a security chip, sometimes present but switched off in the BIOS",
          "Secure Boot: a firmware option, sometimes disabled",
          "Memory and storage: minimums to meet",
          "UEFI boot mode: rather than the legacy mode",
        ],
      },
      { type: "h2", text: "How do you test your PC?" },
      {
        type: "ul",
        items: [
          "Use Microsoft's PC Health Check app: it says whether the PC is compatible and, if not, why",
          "Look in Windows Settings under Windows Update: a message shows whether the upgrade is offered",
          "For detail, open System Information (msinfo32), which shows the BIOS mode and the Secure Boot state",
        ],
      },
      { type: "h2", text: "What if TPM or Secure Boot shows as \"absent\"?" },
      {
        type: "p",
        text: "It is often a setting turned off rather than missing hardware. In your motherboard's BIOS or UEFI, look for the TPM options (sometimes called PTT on Intel or fTPM on AMD) and Secure Boot. Names vary by brand: check the manufacturer's documentation, and note your settings before changing anything.",
      },
      { type: "h2", text: "What if the processor is not supported?" },
      {
        type: "p",
        text: "This is the firmest limit. You then have three options: stay on your current Windows version for as long as it is supported (for Windows 10, free support ended on 14 October 2025: see [Windows 10 end of support: what to do with your PC](/blog/windows-10-end-of-support-what-to-do-with-your-pc)), consider replacing or upgrading hardware, or, for advanced users, look at unofficial workarounds, which carry risks and are not guaranteed. Our article [before buying a new PC](/blog/before-buying-a-new-pc) helps you decide.",
      },
      { type: "h2", text: "Before migrating: check the PC's health" },
      {
        type: "p",
        text: "An upgrade on a fragile PC goes badly. Check your disk (see [signs of a failing hard drive](/blog/failing-hard-drive-signs)), free space and recent crashes. A Nyctale analysis reads the Windows log and disk health: a good starting point before any migration. If Windows 11 later feels slow, read [Windows 11 slow after an update](/blog/windows-11-slow-after-update).",
      },
      { type: "h2", text: "Conclusion: check first, always back up" },
      {
        type: "p",
        text: "Check compatibility with the official tool, fix what is only a setting and back up your data before any upgrade. Nyctale's analysis is free and gives you a health overview of the PC in a few minutes.",
      },
    ],
    faq: [
      {
        q: "How do I know if my PC can run Windows 11?",
        r: "With Microsoft's official app, or in Windows Update settings.",
      },
      {
        q: "My PC has a TPM but is refused, why?",
        r: "It may be disabled in the BIOS, or the processor is not supported.",
      },
      {
        q: "Can you install Windows 11 without TPM 2.0?",
        r: "Officially no. Workarounds exist but are neither official nor guaranteed.",
      },
      {
        q: "Should I back up before upgrading?",
        r: "Yes, always.",
      },
      {
        q: "Is Windows 10 still usable?",
        r: "Its free support ended on 14 October 2025. An Extended Security Updates programme runs until 12 October 2027 for consumers: our article on Windows 10 end of support covers the options.",
      },
    ],
    liens: ["before-buying-a-new-pc", "failing-hard-drive-signs", "windows-11-slow-after-update", "windows-10-end-of-support-what-to-do-with-your-pc"],
  },
  {
    slug: "windows-10-end-of-support-what-to-do-with-your-pc",
    lang: "en",
    traduction: "windows-10-fin-de-support-que-faire-de-son-pc",
    title: "Windows 10 End of Support: What to Do With Your PC",
    seoTitle: "Windows 10 End of Support: What to Do With Your PC",
    excerpt:
      "Windows 10 has been out of support since 14 October 2025. Migrate, replace, switch to Linux or join ESU until October 2027: how to decide.",
    image: { src: "/images/blog/nyctale-windows-10-fin-de-support-en.png", alt: "Timeline: free Windows 10 support ends on 14 October 2025, consumer ESU ends on 12 October 2027, and four options: Windows 11, replace the PC, Linux or ESU" },
    date: "2026-10-14",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "Windows 10 has not been supported since 14 October 2025: it no longer receives free security fixes, and continuing to use it exposes your PC more. You have four options: migrate to Windows 11 if your PC is compatible, replace the PC, switch to a Linux distribution, or enrol in Microsoft's Extended Security Updates (ESU) programme, which runs until 12 October 2027 for consumers.",
      },
      {
        type: "p",
        text: "The question concerns millions of perfectly good PCs. Before throwing out or replacing anything, decide based on your machine's real condition. The ESU terms have already changed once: read [Microsoft's official page](https://www.microsoft.com/windows/extended-security-updates) before enrolling.",
      },
      { type: "h2", text: "Option 1: migrate to Windows 11" },
      {
        type: "p",
        text: "If your PC is compatible, it is the simplest and free route. Check compatibility: see [is my PC compatible with Windows 11?](/blog/is-my-pc-compatible-with-windows-11) and the [official specifications page](https://www.microsoft.com/windows/windows-11-specifications). Back up first.",
      },
      { type: "h2", text: "Option 2: look into extended security updates" },
      {
        type: "p",
        text: "The consumer ESU programme gives access to critical and important security fixes until 12 October 2027, and you can enrol at any time until then. It includes no new features and no technical support. For an individual in the European Economic Area, according to Microsoft's page consulted on 14 October 2026:",
      },
      {
        type: "ul",
        items: [
          "if you sign in to Windows with a Microsoft account, enrolment is at no extra cost, as long as you stay signed in with that account (otherwise updates stop after up to 60 days and you must re-enrol);",
          "if you prefer to keep a local account, a one-time purchase of 30 US dollars (or the local-currency equivalent, plus tax) lets you enrol.",
        ],
      },
      {
        type: "p",
        text: "You need a PC running Windows 10 version 22H2 (Home or Pro, among others), fully updated, and an administrator account. It is a delay, not a lasting solution: ESU stops in October 2027.",
      },
      { type: "h2", text: "Option 3: replace the PC" },
      {
        type: "p",
        text: "If the PC is too old for Windows 11 and for your uses, replacement can be justified. Our article [before buying a new PC](/blog/before-buying-a-new-pc) helps decide, and a diagnosis of the PC's condition avoids replacing a machine that is still healthy.",
      },
      { type: "h2", text: "Option 4: switch to Linux" },
      {
        type: "p",
        text: "A mainstream Linux distribution can give an old PC a second life for browsing, email and office work. The change of habits is real, and some software or devices have no equivalent. Try it from a USB stick before committing. Nyctale also exists in a Linux version.",
      },
      { type: "h2", text: "How do you decide according to the PC's condition?" },
      {
        type: "ul",
        items: [
          "Healthy and compatible PC: Windows 11",
          "Healthy but incompatible PC, simple uses: Linux or, for a time, the extended option",
          "Tired PC (worn disk, overheating, slowness): replacement",
        ],
      },
      {
        type: "p",
        text: "An analysis of the PC's condition helps decide: Nyctale's analysis is free.",
      },
      { type: "h2", text: "What to do in the meantime?" },
      {
        type: "p",
        text: "Keep Windows and your software up to date, use an account without administrator rights day to day, avoid dubious attachments and sites, and back up regularly.",
      },
      { type: "h2", text: "Conclusion: decide according to the machine's real condition" },
      {
        type: "p",
        text: "Do not replace a healthy PC out of reflex, and do not keep an unsupported system indefinitely. If you enrol in ESU, you have until 12 October 2027 to prepare what comes next.",
      },
    ],
    faq: [
      {
        q: "What happens when Windows 10 is no longer supported?",
        r: "It no longer receives free security fixes, which exposes the PC more.",
      },
      {
        q: "Must my PC move to Windows 11?",
        r: "No, other options exist, but check compatibility first.",
      },
      {
        q: "Is Linux a good option?",
        r: "For simple uses on an older PC, often yes; test first.",
      },
      {
        q: "Should I back up?",
        r: "Yes, before any migration.",
      },
      {
        q: "How long can I stay on Windows 10 safely?",
        r: "Free support ended on 14 October 2025. With consumer ESU, security fixes continue until 12 October 2027, after enrolment.",
      },
      {
        q: "Is ESU paid?",
        r: "Not if you stay signed in to Windows with a Microsoft account. With a local account it is a one-time purchase of 30 US dollars (or equivalent, plus tax), according to Microsoft's page consulted on 14 October 2026.",
      },
      {
        q: "Where can I find the official dates?",
        r: "On Microsoft's ESU page.",
      },
    ],
    liens: ["is-my-pc-compatible-with-windows-11", "before-buying-a-new-pc", "failing-hard-drive-signs"],
  },
  {
    slug: "startup-programs-which-ones-to-disable",
    lang: "en",
    traduction: "programmes-au-demarrage-lesquels-desactiver",
    title: "Startup Programs: Which Ones to Disable Safely",
    seoTitle: "Startup Programs: Which Ones to Disable Safely",
    excerpt:
      "Task Manager lists what launches with Windows. How to sort useful from useless, and what is best never disabled.",
    image: { src: "/images/blog/nyctale-programmes-demarrage-en.jpg", alt: "Startup programs sorted by impact: disable game launchers, messaging apps, secondary updaters and manufacturer assistants; keep the antivirus and drivers; look up an unknown item before deciding" },
    date: "2026-10-20",
    readMin: 4,
    blocks: [
      {
        type: "p",
        text: "To speed up startup, disable startup programs you do not need straight away: game launchers, software updaters, messaging apps, manufacturer assistants. Leave the antivirus, drivers and anything you do not recognise in place until you have checked. Disabling is not uninstalling: you can go back.",
      },
      {
        type: "p",
        text: "The more programs at startup, the longer Windows takes to become usable. Each is sometimes justified, often superfluous. This article complements [a slow PC at startup](/blog/slow-pc-startup).",
      },
      { type: "h2", text: "Where do you see startup programs?" },
      {
        type: "p",
        text: "Open Task Manager (Ctrl + Shift + Esc), then the 'Startup apps' tab ('Startup' on Windows 10). Each line shows the name, publisher, status and startup impact (high, medium, low). Sorting by impact brings out the heaviest.",
      },
      {
        type: "p",
        text: "The same list exists in Settings > Apps > Startup, with a toggle on each line. In Task Manager, right-clicking a line and choosing 'Disable' does the same thing.",
      },
      { type: "h2", text: "Which should you disable?" },
      {
        type: "ul",
        items: [
          "Game launchers and platforms you rarely open",
          "Messaging and social apps you start yourself",
          "Automatic updaters for secondary software",
          "Manufacturer assistants and software whose features you do not use",
          "Syncing you do not need from the start",
        ],
      },
      { type: "h2", text: "Which should you leave?" },
      {
        type: "ul",
        items: [
          "The antivirus and security tools",
          "Essential hardware drivers and utilities (sound, trackpad, graphics)",
          "Anything you do not recognise: look up its name before deciding",
        ],
      },
      { type: "h2", text: "What if I get it wrong?" },
      {
        type: "p",
        text: "Nothing serious: disabling a startup program does not delete it. It will simply launch on demand, when you open it. If something is missing, re-enable it in the same list.",
      },
      { type: "h2", text: "How much time do you save?" },
      {
        type: "p",
        text: "It varies enormously by machine and list. Measure it yourself: restart, note the time until the PC is really usable, disable three heavy items, then try again. Nyctale reports the number of programs that launch with Windows among its checks.",
      },
      { type: "h2", text: "What if the PC is still slow?" },
      {
        type: "p",
        text: "Startup programs are only one cause among others: see [a slow computer with no obvious reason](/blog/slow-computer-no-obvious-reason). For official procedures, see [Microsoft support](https://support.microsoft.com).",
      },
      { type: "h2", text: "Conclusion: disable with method" },
      {
        type: "p",
        text: "Sort by impact, disable what is not essential, keep security and drivers, measure the gain. Nyctale's free analysis counts your startup programs.",
      },
    ],
    faq: [
      {
        q: "Can I disable all startup programs?",
        r: "No: keep security and essential drivers.",
      },
      {
        q: "Does disabling delete the program?",
        r: "No, it simply no longer launches at startup.",
      },
      {
        q: "How do I know if an item is useful?",
        r: "Look up its name; if in doubt, leave it.",
      },
      {
        q: "Is the gain guaranteed?",
        r: "No: it depends on the machine. Measure before and after.",
      },
      {
        q: "Does Nyctale look at this?",
        r: "Yes, it is one of its diagnostic rules.",
      },
    ],
    liens: ["slow-pc-startup", "slow-computer-no-obvious-reason", "windows-11-slow-after-update"],
  },
  {
    slug: "ram-full-how-to-read-memory-usage",
    lang: "en",
    traduction: "memoire-ram-saturee-comment-la-lire",
    title: "RAM Full at Idle on Windows 11 & 10: How to Read Memory Usage and What to Do",
    seoTitle: "RAM Full at Idle on Windows 11/10: How to Read It and Fix It",
    excerpt:
      "RAM looks full at idle on Windows 11 or 10? How to read Task Manager (in use, available, committed, cached), what is normal and what to do about it.",
    image: { src: "/images/blog/nyctale-memoire-ram-en.jpg", alt: "Reading memory in Task Manager: in use (compressed), available, committed, cached; what matters is available memory and slowness, not the percentage" },
    date: "2026-10-23",
    readMin: 6,
    blocks: [
      {
        type: "p",
        text: "RAM that looks full at idle on Windows 11 or 10 is not always a problem: Windows deliberately keeps data cached in free memory and hands it back as soon as a program needs it. The real warning sign is available memory that stays very low while the PC gets slow. To check, open Task Manager (Ctrl + Shift + Esc), Performance tab, Memory section, then sort processes by memory to find the big consumers.",
      },
      {
        type: "p",
        text: "RAM is the computer's working space. When it truly runs short, Windows compresses data or moves part of it to the disk, which is far slower: everything turns sluggish, even if the processor and disk are fine. But a high percentage on its own does not mean memory is short. This article explains how to read each figure, how to tell well-used memory from saturated memory, and what to do in each case. If your PC is slow with no obvious cause, also see [a slow computer with no obvious reason](/blog/slow-computer-no-obvious-reason).",
      },
      { type: "h2", text: "Is 'full' memory at idle always a problem?" },
      {
        type: "p",
        text: "No. Empty RAM is wasted RAM: Windows uses it to keep files and programs you opened recently or open often, so they start faster. This cached memory shows up as occupied, but it is released instantly when an application asks for it. That is why a PC can show 60 or 70% memory in use while doing nothing, and still run perfectly smoothly.",
      },
      {
        type: "p",
        text: "Trouble starts when truly available memory gets very low and slowdowns follow: windows that take a while to appear, tabs that reload, a disk that never stops working. That pair, 'little available memory + slowness', is what you are looking for, not an isolated percentage.",
      },
      { type: "h2", text: "How do you read memory in Task Manager?" },
      {
        type: "ol",
        items: [
          "Open Task Manager with Ctrl + Shift + Esc (click 'More details' if it opens in compact view).",
          "Go to the Performance tab, then click 'Memory': the graph shows usage over the last minute.",
          "Below the graph, read the counters listed below, ideally after a few minutes at idle, then during your normal use.",
          "Go back to the Processes tab and click the Memory column header to sort from hungriest to lightest.",
        ],
      },
      {
        type: "ul",
        items: [
          "In use (Compressed): memory occupied by programs and Windows. The figure in brackets is the part Windows has compressed to save space.",
          "Available: what Windows can give a program right away, cache included. This is the most telling figure: if it stays comfortable, memory is not saturated.",
          "Committed: two numbers, for example 14/20 GB. The first is memory programs have reserved, the second is the limit (RAM plus page file). It is not memory actually in use right now.",
          "Cached: memory kept in reserve to speed Windows up, released whenever needed.",
        ],
      },
      { type: "h2", text: "Committed memory is above my RAM: is the PC using the disk?" },
      {
        type: "p",
        text: "Not necessarily, and this is a very common mix-up. Many programs reserve more memory than they actually use. The 'committed' total can therefore exceed the installed RAM without Windows writing anything to disk. Cross-check it with available memory and with disk activity, also on the Performance tab.",
      },
      {
        type: "p",
        text: "We made that mistake ourselves: an early version of Nyctale's memory rule read this figure too quickly as a lack of RAM. On a real machine, it reported a shortage while 24% of memory was still available. It now requires Windows to be actually reading data back from the disk before drawing that conclusion. Remember that one figure alone is not a diagnosis: what matters is how the figures combine with the slowness you feel.",
      },
      { type: "h2", text: "What uses memory when you are doing nothing?" },
      {
        type: "p",
        text: "The first suspect is almost always the browser: every tab, every extension and every web app left open in the background takes its share, and twenty tabs can tie up several gigabytes. Next come messaging and video-call apps left open, file sync software, game launchers and manufacturer utilities that start with Windows.",
      },
      {
        type: "p",
        text: "Many of these programs start on their own with the computer, which explains memory that is already well filled 'at idle'. Cleaning up startup often solves a good part of the problem: see [which startup programs you can safely disable](/blog/startup-programs-which-ones-to-disable).",
      },
      { type: "h2", text: "What should you do when memory is really saturated?" },
      {
        type: "ul",
        items: [
          "Close the tabs and applications you are not using: it is the only action that frees memory right away.",
          "Turn on your browser's memory saving (Chrome's Memory Saver, Edge's sleeping tabs): inactive tabs release their memory.",
          "Restart: a PC left on for days, or put to sleep without ever restarting, accumulates processes that no longer close.",
          "Disable unneeded startup programs, see [a slow PC at startup](/blog/slow-pc-startup).",
          "Beware of 'RAM cleaners': forcibly emptying the cache makes Windows reload everything and slows things down more than it speeds them up.",
          "If available memory stays very low during your normal use, every day, add memory if your PC allows it.",
        ],
      },
      { type: "h2", text: "Should you add RAM or replace the PC?" },
      {
        type: "p",
        text: "Adding memory is often the most cost-effective repair when saturation is real and daily. It is not always possible: on many thin laptops, memory is soldered to the motherboard. Before deciding, also check the disk: a lack of RAM on a mechanical hard drive is all the more noticeable because the disk is slow, as explained in our article on [100% disk usage on Windows](/blog/disk-100-percent-windows).",
      },
      {
        type: "p",
        text: "Replacing the PC makes more sense when memory is soldered and insufficient, when the processor and disk are just as old, or when the repair bill outweighs the benefit. Our article [before buying a new PC](/blog/before-buying-a-new-pc) helps you decide.",
      },
      { type: "h2", text: "What does Nyctale check on the memory side?" },
      {
        type: "p",
        text: "Nyctale distinguishes three situations: working memory that is truly saturated (it calculates available memory excluding Windows' normal cache), a computer falling back on the disk for lack of RAM, and constant memory compression, a classic cause of heat when you have 'done nothing'. A dedicated rule also spots a browser taking a large share of memory, and checks whether its memory saving is already turned on. For each case, it explains the cause in plain language and suggests the right action.",
      },
      { type: "h2", text: "Conclusion: read before you buy" },
      {
        type: "p",
        text: "Well-filled memory at idle is often the sign of a Windows that is doing its job. Look at available memory and felt slowness before the percentage, close what you do not use, clean up startup, and only add RAM if saturation is real and daily. Nyctale's free analysis reads the state of memory and tells you whether it is really to blame.",
      },
    ],
    faq: [
      {
        q: "Is it normal for my RAM to be at 70% while doing nothing?",
        r: "Often yes: Windows keeps data cached in free memory and releases it as soon as a program needs it. Look at available memory and how smooth the PC feels instead.",
      },
      {
        q: "How do I see my RAM usage?",
        r: "In Task Manager (Ctrl + Shift + Esc), Performance tab, Memory section; the Processes tab, sorted by the Memory column, shows the hungriest programs.",
      },
      {
        q: "Committed memory is higher than my RAM, is that serious?",
        r: "Not necessarily: it is reserved memory, not used memory. Cross-check it with available memory and disk activity.",
      },
      {
        q: "Are RAM cleaners useful?",
        r: "No: forcibly emptying the cache makes Windows reload everything. Closing unneeded programs works better.",
      },
      {
        q: "How much RAM do I need?",
        r: "It depends on your use: watch available memory during a normal day before deciding to add more.",
      },
    ],
    liens: ["slow-computer-no-obvious-reason", "startup-programs-which-ones-to-disable", "slow-pc-startup", "disk-100-percent-windows", "before-buying-a-new-pc"],
  },
  {
    slug: "before-reformatting-your-pc-what-a-diagnostic-can-save-you",
    lang: "en",
    traduction: "avant-de-formater-son-pc-ce-qu-une-analyse-peut-eviter",
    title: "Before Reformatting Your PC: What a Diagnostic Can Save You",
    seoTitle: "Reformat a Slow PC? What to Check Before You Do",
    excerpt:
      "Reformatting is the last resort, not the first. The causes of slowness you can fix without reinstalling, the ones a reformat will not fix, and how to decide knowingly.",
    image: { src: "/images/blog/nyctale-avant-formater-en.jpg", alt: "Two columns: what you can fix without reformatting (stuck program, full memory, full disk, heavy startup, browser, system files) and what a reformat does not fix (worn disk, overheating, worn battery, hardware too limited)" },
    date: "2026-10-27",
    readMin: 7,
    blocks: [
      {
        type: "p",
        text: "Before reformatting a slow PC, check the cause first: many slowdowns come from a runaway program, full memory, a nearly full disk, too many startup programs or damaged system files, and all of them can be fixed without reinstalling Windows. Conversely, a failing disk, overheating or hardware that is too old will come back after the reformat. A few minutes of diagnosis is enough to know which case you are in.",
      },
      {
        type: "p",
        text: "Reformatting is tempting because it promises a 'like new' PC. But it has a cost: documents to back up, software to reinstall, accounts to sign back into, settings to redo, often a whole evening or more. And it repairs nothing physical. This article sorts out what a reformat really fixes, what it does not, and what to check before you decide. If your PC slows down for no visible reason, start with [a slow computer with no obvious reason](/blog/slow-computer-no-obvious-reason).",
      },
      { type: "h2", text: "Why does reformatting feel like it fixes everything?" },
      {
        type: "p",
        text: "Because it resets everything at once: no more startup programs, no more piled-up extensions, no more temporary files, a suddenly very empty disk. For a few weeks, the PC feels fast. But if the real cause was one of those build-ups, fixing that one alone was enough. And if the cause was hardware, it comes back with the first heavier task.",
      },
      {
        type: "p",
        text: "There is also a case where slowness comes from a fake restart. With Windows 'Fast startup', the Shut down button does not fully clear the system session: a PC switched off every evening may not have truly restarted for days. A real restart (Start > Power > Restart) sometimes fixes in one minute what you expected to fix by reformatting.",
      },
      { type: "h2", text: "Which causes can you fix without reformatting?" },
      {
        type: "ul",
        items: [
          "A runaway program: it hogs the processor or memory. Task Manager (Ctrl + Shift + Esc), sorted by CPU then by memory, shows it in seconds.",
          "Full memory: often the browser or apps left open; see [how to read full RAM](/blog/ram-full-how-to-read-memory-usage).",
          "A nearly full disk: Windows needs free space to work; emptying the recycle bin, temporary files and old updates often frees a lot.",
          "Too many startup programs: each one slows down sign-in and takes memory; see [which startup programs to disable](/blog/startup-programs-which-ones-to-disable).",
          "A browser overloaded with tabs and extensions, which can take a large share of memory on its own.",
          "Damaged system files, which Windows can check and repair by itself with two commands (DISM, then sfc /scannow).",
        ],
      },
      {
        type: "p",
        text: "That last case deserves attention, because it is invisible. On the work PC used to build Nyctale, the sfc /scannow command found and repaired corrupted system files. No message had warned about it, only slowdowns and erratic behaviour: exactly the kind of symptom that pushes people to reformat, while Windows can repair it for free in 10 to 20 minutes.",
      },
      { type: "h2", text: "Which causes does a reformat not fix?" },
      {
        type: "ul",
        items: [
          "A disk at end of life: reformatting does not rejuvenate it, and reinstalling Windows on a failing disk means risking losing everything a second time; see [signs of a failing hard drive](/blog/failing-hard-drive-signs).",
          "Overheating: dust in the air vents or worn thermal paste make the PC run hot, and it throttles itself to stay safe; a clogged PC will heat up again from day one. See [a fan that never stops spinning](/blog/fan-that-never-stops-spinning).",
          "A worn battery on a laptop: it drains fast, and no software gives it its capacity back.",
          "Hardware too limited for your uses: little soldered memory, a mechanical hard drive, an old processor; see [before buying a new PC](/blog/before-buying-a-new-pc).",
        ],
      },
      {
        type: "p",
        text: "Reformatting those PCs means losing a day to find the same problem again. For dust, blowing out the vents with compressed air, device off and unplugged, often fixes most of it; a full clean with fresh thermal paste usually costs 50 to 80 euros at a repair shop. For a mechanical hard drive that is still healthy but slow, swapping it for an SSD changes far more than a reinstall.",
      },
      { type: "h2", text: "What should you check before deciding?" },
      {
        type: "ol",
        items: [
          "Disk health and free space: a disk reported as unhealthy comes before everything else (back up first).",
          "Processor and memory load at idle: a program running while you do nothing is an immediate lead.",
          "Startup programs: Settings > Apps > Startup, with the impact of each one.",
          "Signs of overheating: a fan blowing hard at idle, a processor slowing down to protect itself.",
          "Recent crashes and sudden shutdowns in the Windows log: they point to hardware, power or a driver.",
          "The last real restart, Fast startup included.",
        ],
      },
      {
        type: "p",
        text: "Done by hand, these checks take several different tools. A diagnostic bundles them in one go. To compare free options, see [the best free PC diagnostic tools](/blog/best-free-pc-diagnostic-tools).",
      },
      { type: "h2", text: "What if reformatting is still necessary?" },
      {
        type: "p",
        text: "Sometimes it is: a system too damaged to repair, a serious infection, or wanting a clean slate before giving away or selling the PC. Prepare it: back up documents, photos and bookmarks to an external drive or online storage, note your licences and make sure you know your passwords, keep the manufacturer's website at hand for drivers.",
      },
      {
        type: "p",
        text: "Before a full reformat, there is a middle step: resetting Windows. In Settings > System > Recovery > Reset this PC, the 'Keep my files' option reinstalls Windows while keeping your personal documents, but removes installed apps and restores default settings. It is lighter than a reformat, and it fixes purely software problems. It does not change anything about a worn disk or overheating either.",
      },
      { type: "h2", text: "What does Nyctale check before you decide?" },
      {
        type: "p",
        text: "Nyctale runs 11 diagnostic rules that cover both columns of this article: stuck program or heavy consumer, full memory or memory made up for by the disk, fake restart caused by Fast startup, thermal throttling, recent crashes in the Windows log, full disk and disk health, worn battery, startup programs, clogged cooling, memory-hungry browser and damaged system files. For each finding, it says plainly whether the cause can be fixed by software or is hardware, and so whether a reformat would help at all.",
      },
      {
        type: "p",
        text: "It does not promise that a diagnostic always avoids a reformat: it only tells you whether the cause lies elsewhere. Repairs that change the system, such as the system file check, only run with your consent.",
      },
      { type: "h2", text: "Conclusion: diagnose before erasing" },
      {
        type: "p",
        text: "A few minutes of diagnosis can save you a day of reinstalling, or save you from reinstalling onto a disk that is about to fail. Start with a real restart, look at what is consuming resources, trim startup, check the disk and the heat; only reformat once those causes are ruled out. [Nyctale's analysis](/en) is free; the first repair is offered, and the full version costs €24.99 as a one-time purchase.",
      },
    ],
    faq: [
      {
        q: "Should I reformat a slow PC?",
        r: "Not first: many slowdowns come from a program, memory, a full disk or startup, and can be fixed without reinstalling.",
      },
      {
        q: "Does reformatting fix everything?",
        r: "No. It does not repair a worn disk, overheating caused by dust, a tired battery or hardware that is too old.",
      },
      {
        q: "What should I back up before reformatting?",
        r: "Documents, photos, browser bookmarks, software licences, and make sure you know your passwords.",
      },
      {
        q: "Is there a lighter option?",
        r: "Yes: Reset this PC with the 'Keep my files' option, in Settings > System > Recovery. Installed apps are removed, your documents stay.",
      },
      {
        q: "Does Nyctale cost anything?",
        r: "The analysis is free, the first repair is offered, then the full version costs €24.99 as a one-time purchase, with no subscription.",
      },
    ],
    liens: ["slow-computer-no-obvious-reason", "ram-full-how-to-read-memory-usage", "failing-hard-drive-signs", "before-buying-a-new-pc", "best-free-pc-diagnostic-tools"],
  },
  {
    slug: "pc-restarts-by-itself",
    lang: "en",
    traduction: "pc-qui-redemarre-tout-seul",
    title: "PC restarts by itself: causes and checks",
    seoTitle: "PC restarts by itself: causes and checks (Windows 10 and 11)",
    excerpt:
      "Update, overheating, power supply, driver or disk: how to tell whether your PC is restarting on purpose or shutting down abruptly, where to read the traces Windows keeps, and what to do for each cause.",
    image: { src: "/images/blog/nyctale-pc-redemarre-en.jpg", alt: "Three cases to tell apart: intended restart (update, Windows message), abrupt shutdown (black screen, events 41, 6008 and 1001 in the log) and a blue screen hidden by automatic restart" },
    date: "2026-10-30",
    readMin: 7,
    blocks: [
      { type: "p", text: "A PC that restarts by itself almost always has an identifiable cause: a Windows update installing, overheating, a weakening power supply or battery, an unstable driver, or more rarely a faulty disk or memory. The method has two steps: first find out whether the restart was intended by Windows or was an abrupt shutdown, then read the traces Windows records after every abnormal shutdown. Those traces exist on every Windows 10 and 11 PC, and they save you from replacing parts at random." },
      { type: "p", text: "Nothing is more annoying than a restart in the middle of an unsaved document, and it is tempting to suspect the worst straight away. Yet a single restart is often nothing to worry about; it is repetition that should make you investigate. If your PC also shows a blue screen before restarting, read our article on [the blue screen in Windows 11](/blog/windows-11-blue-screen-fix) as well, which covers the error codes." },
      { type: "h2", text: "Is the restart intended or abrupt?" },
      { type: "p", text: "An intended restart is orchestrated by Windows: it follows an update, a driver installation or a click of yours. Windows closes programs, shows “Restarting” or “Working on updates”, then starts again. After an update it may do this at night or when you are away from the screen, which in the morning looks like a PC that restarted “by itself”." },
      { type: "p", text: "An abrupt shutdown, on the other hand, looks like a power cut: the screen goes black at once, with no message, and the PC restarts or stays off. Windows had no time to shut down properly. On the next boot it notices and writes it to the system log: event 41 (“Kernel-Power”, the system rebooted without cleanly shutting down), event 6008 (“the previous system shutdown was unexpected”) and, if a blue screen occurred, event 1001, which keeps the error code." },
      { type: "p", text: "One detail often misleads people: by default, Windows restarts automatically after a system error. The blue screen only appears for a moment, or not at all, and all you see is a restart. If you suspect this, the log will tell you: an event 1001 at the time of the restart means a blue screen you never saw." },
      { type: "h2", text: "What are the most frequent causes?" },
      { type: "h3", text: "1. A Windows update" },
      { type: "p", text: "This is the most mundane cause and the easiest to check. Windows Update restarts outside the “active hours” you have set; if they do not match your real schedule, the restart comes at the wrong time. Nothing serious: it is an intended restart, not a fault." },
      { type: "h3", text: "2. Overheating" },
      { type: "p", text: "When the processor reaches a dangerous temperature, it first slows down to protect itself, then the PC cuts out if that is not enough. The typical sign: a shutdown during a game, a video export or a long session, and a fan that blows hard even at idle. On a PC more than three or four years old, dust in the vents and worn thermal paste are the most common cause." },
      { type: "h3", text: "3. A weakening power supply or battery" },
      { type: "p", text: "On a desktop, a tired or undersized power supply gives out when power demand rises, typically under graphics load. On a laptop, a worn battery can cut the machine off well before it shows 0%. A faulty power strip or a power cut leave exactly the same traces as a fault: that is why an abrupt shutdown on its own does not prove overheating." },
      { type: "h3", text: "4. An unstable driver or program" },
      { type: "p", text: "A faulty graphics, Wi-Fi or storage driver causes blue screens, and therefore restarts. Suspicion grows when the problems started right after a driver update or after installing software that adds drivers (antivirus, monitoring tools, peripheral software)." },
      { type: "h3", text: "5. A faulty disk or memory" },
      { type: "p", text: "A faulty memory module or a disk near the end of its life cause random crashes, unrelated to load or updates. It is the least frequent cause, but the most important one to catch, because it puts your data at risk." },
      { type: "h2", text: "How do you find the cause, step by step?" },
      { type: "p", text: "Work in this order, from simplest to most technical. Most of the time, the cause shows up within the first three steps." },
      {
        type: "ol",
        items: [
          "Note the context of each restart: the time, what you were doing (gaming, video, nothing at all), and whether the PC was on battery or plugged in. A restart always under load points to heat or power; at idle, to a driver or hardware.",
          "Open Settings > Windows Update > Update history. An update installed at the time of the restart explains everything.",
          "Type “reliability” in Windows search and open “View reliability history”. This monitor shows, day by day, improper shutdowns and application crashes, in a more readable form than Event Viewer.",
          "For the details, open Event Viewer (right-click Start), then Windows Logs > System, and filter on IDs 41, 6008 and 1001. Compare their times with your restarts.",
          "Keep an eye on heat: a fan that never stops is a clue, see [a PC fan always running at full speed](/blog/fan-that-never-stops-spinning).",
          "If you suspect a hidden blue screen, turn off automatic restart: Control Panel > System > Advanced system settings > Startup and Recovery, untick “Automatically restart”. On the next crash, the blue screen will stay up with its code.",
          "Finally, check the hardware: disk health (see [signs of a failing hard drive](/blog/failing-hard-drive-signs)) and memory, with the Windows Memory Diagnostic tool (type mdsched in search).",
        ],
      },
      { type: "p", text: "One trap to know when reading the log: a single abrupt shutdown often writes two or three events at once (41 on reboot, 6008, and 1001 if there was a blue screen). Counting log lines therefore overstates the number of crashes. Nyctale itself had this flaw in an early version: one incident counted as three and looked like a serious problem. It now groups events written less than ten minutes apart, to count incidents rather than lines. Our page on [diagnosing crashes and Kernel-Power event 41](/diagnostic-crash-pc) compares this reading with Event Viewer and other free tools." },
      { type: "h2", text: "What do you do for each cause?" },
      {
        type: "ul",
        items: [
          "Update: let it finish, then set your active hours in Settings > Windows Update > Advanced options, so restarts happen when you are not working.",
          "Overheating: dust out the vents with a can of compressed air, with the device off, unplugged, and preferably outdoors. Do not rest a laptop on a bed or sofa. If the heat persists, a full clean with fresh thermal paste at a repair shop usually costs 50 to 80 euros. No software can fix dust.",
          "Driver: if the problem began after a driver update, open Device Manager, right-click the device > Properties > Driver > “Roll Back Driver”.",
          "Power supply or battery: plug the PC straight into the wall, without a power strip, and remove recently added hardware. On a laptop, compare behaviour on battery and on mains power.",
          "Disk or memory: back up your files before anything else, then have the faulty part replaced.",
        ],
      },
      { type: "h2", text: "When should you see a professional?" },
      { type: "p", text: "Call a repairer if abrupt shutdowns keep happening with no cause found after these checks, if the PC cuts out as soon as it works a little despite dusting, if the disk shows signs of wear, or if the computer no longer starts at all. In every case, back up your data first: it is the one action you can never regret. And if you are tempted to reinstall everything, first read [what a diagnostic can save you before reformatting](/blog/before-reformatting-your-pc-what-a-diagnostic-can-save-you): reformatting fixes neither overheating nor a tired power supply." },
      { type: "h2", text: "Conclusion: read the traces rather than guess" },
      { type: "p", text: "Windows keeps a record of every abnormal shutdown; you just need to know where to look. [Nyctale's analysis](/en) does it for you: it reads the system log for the last thirty days, counts distinct incidents, and treats three or more abrupt shutdowns in a month as the most serious sign in its report. It also cross-checks those shutdowns with the episodes where the processor had to slow down to protect itself from heat: when both coincide, with no stuck program to explain them, it points to cooling rather than software. The analysis is free, the first repair is on the house, and the full version costs €24.99 as a one-time purchase." },
    ],
    faq: [
      {
        q: "Why does my PC restart without warning?",
        r: "Most often because of a Windows update, overheating, a weakening power supply or battery, an unstable driver, and more rarely a faulty disk or memory. The Windows log lets you decide between them.",
      },
      {
        q: "How do I see unexpected shutdowns in Windows?",
        r: "The simplest way: type “reliability” in search and open the reliability history. For details, Event Viewer, System log, IDs 41, 6008 and 1001.",
      },
      {
        q: "Can a PC restart because of heat?",
        r: "Yes. An overheated processor first slows down, then the PC cuts out to protect its components. A shutdown under load with a noisy fan is the typical sign.",
      },
      {
        q: "Why don't I see the blue screen?",
        r: "Because Windows restarts automatically after a system error. Untick “Automatically restart” in Startup and Recovery to keep the blue screen and its code on display.",
      },
      {
        q: "Can Nyctale find the cause?",
        r: "Its free analysis reads the abnormal shutdowns of the last thirty days, disk health and signs of overheating, and states the most likely cause in plain language.",
      },
    ],
    liens: ["windows-11-blue-screen-fix", "fan-that-never-stops-spinning", "failing-hard-drive-signs", "before-reformatting-your-pc-what-a-diagnostic-can-save-you"],
  },
];
