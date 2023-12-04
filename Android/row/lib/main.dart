import 'package:flutter/material.dart';

void main() {
  runApp(const MyWidget());
}

class MyWidget extends StatelessWidget {
  const MyWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text("Hello App")),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: const[
            Text("Heeeeeeeeeeeey", style:TextStyle(fontSize: 30),),
            Icon(size:70,
            Icons.account_balance,
            color: Colors.deepPurple,),
            Icon(size: 70, 
            Icons.ad_units,
            color: Colors.deepPurple,), 
          ],
        ),
      ),
    );
  }
}
