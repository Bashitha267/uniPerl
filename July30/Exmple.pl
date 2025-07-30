# 1
# print"Enter the number to check Even or Odd:";
# $num=<STDIN>;
# chomp($num);

# if($num%2==0){
	# print"This is even number\n";
# }
# else{
	# print"This is odd\n";
# }
# 2

# print"Enter the marks:";
# my $marks=<STDIN>;
# if($marks>=50){
	# print"Pass\n";
# }else{
	# print"Not Pass\n";
# }
# 3
# print"Enter the number to check Even or Odd:";
# $number=<STDIN>;
# chomp($number);
# unless($number<0){
	# print"Positive Number\n";
# }else{
	# print"Negative Number\n";
# }
# 4
 # print"Enter the marks:";
 # $marks1=<STDIN>;
 # chomp($marks1);
 # if($marks1<30){
	 # print"Low\n";
 # }elsif($marks1>=30&$marks1<70){
	 # print"Medium\n";
 # }
 # else{
	 # print"High\n";
 # }
 # 5
 # $str=<STDIN>;
 # chomp($str);
 # unless($str eq ""){
	 # print"$str\n";
 # }
 # else{
	 # print"String is empty"\n;
 # }
 # 6
  # print"Enter the Age:";
 # $age12=<STDIN>;
 # chomp($age12);
 # if($age12>=18){
	 # print"Id no:";
	 # $id=<STDIN>;
	 # chomp($id);
	 # unless($id){
		 # print"No id\n";
	 # }
	 # else{
		 # print"Entry Allowed\n";
	 # }
 # }
 # else{
	 # print"Too Young\n";
 # }
 
 print"User Name:";
$userName=<STDIN>;

chomp($userName);
print"Password:";
$password=<STDIN>;
chomp($password);
unless($userName eq "admin" & $password eq "1234"){
	print"Access Not Granted";
}
else{
	print"Access Granted";
	
}
	

