const url = new URL("https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107");





console.log(url.searchParams.keys());
console.log(url.searchParams.values());
url.searchParams.delete('sm');
console.log(url.searchParams.keys());