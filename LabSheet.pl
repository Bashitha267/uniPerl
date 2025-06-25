my $temperature =32;
my $humidity=75;
print("Humidity: ".$humidity." Temperature: ".$temperature."\n");
my $note="Weather is nice today";
print("$note\n");
print("Enter animal: ");
my $animal=<STDIN>;
chomp($animal);
print("String in lowercase:".lc($animal)."\n");
print("String in Uppercase:".uc($animal)."\n");
print("String in only first letter lowercase:".lcfirst($animal)."\n");
print("String in only first letter lowercase:".ucfirst($animal)."\n");
print ("Length of the string is: ".length($animal)."\n");
print ("First 4 characters: ".substr($animal,1,4)."\n");




