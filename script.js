function shareGame() {
    // Game ka live URL (GitHub Pages wala link)
    const gameUrl = window.location.href; 
    const currentStage = stages[stageIndex].name;
    const emoji = stages[stageIndex].emoji;
    
    // Viral Message Template
    const message = `🚀 EVOLUTION 2026 CHALLENGE! %0A%0AI evolved into a ${currentStage} ${emoji}! %0A%0ACan you beat my speed? ⚡%0APlay here: ${gameUrl}`;
    
    // WhatsApp Direct Link (Mobile aur PC dono par chalega)
    const whatsappUrl = `https://api.whatsapp.com{message}`;
    
    // Nayi window mein open karein
    window.open(whatsappUrl, '_blank');
}
