

using System;
using System.Collections.Generic;

public static void Main(String [] args){

Console.WriteLine("Hello, World!");

}

public class TestClass
{
    public int Id { get; set; }
    public string Name { get; set; }
    public List<string> Tags { get; set; }

    public TestClass(int id, string name, List<string> tags)
    {
        Id = id;
        Name = name;
        Tags = tags;
    
    }


}