document.addEventListener('DOMContentLoaded', function() {
    // Convert {{sidenote: content}} to proper sidenote markup
    const content = document.querySelector('.post-content, .page-content');
    if (content) {
        let html = content.innerHTML;
        
        // Replace sidenote syntax
        html = html.replace(/\{\{sidenote:\s*([^}]+)\}\}/g, function(match, noteContent) {
            return '<span class="sidenote-number"></span><span class="sidenote">' + noteContent.trim() + '</span>';
        });
        
        // Replace marginnote syntax
        html = html.replace(/\{\{marginnote:\s*([^}]+)\}\}/g, function(match, noteContent) {
            return '<span class="marginnote">' + noteContent.trim() + '</span>';
        });
        
        content.innerHTML = html;
    }
});