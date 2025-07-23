%Experience=("perl"=>5,"Java"=>1,"python"=>2);
print $Experience{"perl"};
print"\n";
@keyArray=keys%Experience;
print "Size of the array:".scalar@keyArray."\n";
if(exists($Experience{"perl"})){
	print"exists";
}
else {
	print"Not Exists";
}
print"\n";
@ExperienceValues=values%Experience;
print scalar@Experiencevalues;

$Experience{"oracle"}=2;
$Experience{"Java Script"}=3;
@valuess=keys%Experience;
foreach$element(@valuess){
	print"$element\n";
}
delete $Experience{"oracle"};
