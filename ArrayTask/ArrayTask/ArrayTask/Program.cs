//Task1
//int n =Convert.ToInt32(Console.ReadLine());
//int[] nums=new int[n];
//int sum = 0;
//for (int i = 0; i < nums.Length; i++)
//{
//   nums[i]=Convert.ToInt32(Console.ReadLine());
//    if (Math.Abs(nums[i])>9 && Math.Abs(nums[i])<100)
//    {
//        sum+=nums[i];
//    }
//} 
//Console.WriteLine("Sum "+sum);



//Task2


int[] nums = new int[10];
int count = 0;

for (int i = 0; i < nums.Length; i++)
{
     nums[i] =Convert.ToInt32(Console.ReadLine());
    while (nums[i]>9)
    {
        nums[i] = Convert.ToInt32(Console.ReadLine());
    }
}
for (int i = 0; i < nums.Length; i++)
{
    count = 0;
    for (int j= 0; j < nums.Length; j++)
    {
        if (i==nums[j])
        {
            count++;
        }
    }
    Console.WriteLine($"{i}={count}");

}
