# Adding content 
1. Write the summary in Notion: https://www.notion.so/Documentaries-f148fcec4dff435892b2bfc5fe0a09d7
2. Make a new file in src\assets\summaries
3. Copy Notion content to here
4. Go to the Firebase site
5. Make a new document in 'summaries'
6. Fill in the fields, including the embed (use the Youtube embed link, not the URL)

# Testing 
1. Open Docosummaries in VS and type localhost: `ng serve`
   * If the versions are incompatible, run powershell and run `nvm use 12.20`
   * If problems with CLI, run `npm remove -g @angular/cli`, then `npm install -g @angular/cli` to reinstall Angular CLI
   * Re-open VS Code.
2. Test:
   * Making sure it shows up on the list after clicking on the sidebar: categories + tags
   * If the embed works, on the page itself
   * Searching for it in the searchbar