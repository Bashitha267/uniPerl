
#01
%Scores=("Math"=>85,"Science"=>90,"History"=>78);
print $Scores{"Science"}."\n";

#02
%Languages=("perl"=>5,"Java"=>1,"Python"=>2);
@lanKeys=keys%Languages;
print @lanKeys."\n";
@lanvalues=values%Languages;
print @lanvalues."\n";
#03
print "number of keys:".scalar@lanKeys."\n";
#04
$Languages{"C"}=3;
print%Languages."\n";
#05
delete $Languages{"Java"};
@lanKeys=keys%Languages;
print @lanKeys;
