@colors=("#0000","#1111","green","Red");
print"@colors[2..4]\n";

@marks=(23,34,56,88,87,46);
splice(@marks,2,3,97..100);
print"@marks\n";

splice(@colors,1,2,"Blue","Yellow");
print"@colors";