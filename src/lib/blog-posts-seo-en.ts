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
        text: "Nyctale reads the Windows log for you: how many sudden shutdowns and crashes occurred over the last 30 days, and whether a disk health warning is flagged. It cross-checks these clues with what is occupying the computer, then names the probable cause. When the problem is hardware, it tells you frankly rather than sending you chasing a useless setting.",
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
    liens: ["failing-hard-drive-signs", "slow-computer-no-obvious-reason", "fan-that-never-stops-spinning"],
  },
  {
    slug: "failing-hard-drive-signs",
    lang: "en",
    traduction: "disque-dur-va-lacher-signes",
    title: "How to Tell If Your Hard Drive Is Failing: Warning Signs and the SMART Test",
    seoTitle: "Failing hard drive: warning signs, SMART test and what to do",
    excerpt:
      "A drive rarely warns you before it dies, but it leaves clues. The signs to watch, how to read SMART health for free and what to do first: back up.",
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
    liens: ["windows-11-blue-screen-fix", "disk-100-percent-windows", "slow-pc-startup"],
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
        text: "Nyctale queries the same sources as these tools (processes, Windows log, drive health) and cross-checks them to name the probable cause in plain language. The analysis is free; the full version, which guides the fix, costs €24.99 once, with no subscription. When the problem is hardware, it tells you rather than sending you chasing a setting.",
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
    liens: ["windows-11-blue-screen-fix", "failing-hard-drive-signs", "slow-computer-no-obvious-reason"],
  },
];
