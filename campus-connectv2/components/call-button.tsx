"use client"

import { Button } from "@/components/ui/button"

export function CallButton() {
  const handleCall = async () => {
    try {
      const response = await fetch('http://localhost:8000/make-call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'test-key-123'
        },
        body: JSON.stringify({
          to_phone_number: "+918218134534",
          from_phone_number: "+14432057041"
        })
      });
      if (!response.ok) throw new Error('Call request failed');
      alert('Call initiated successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to initiate call. Please try again.');
    }
  }

  return (
    <Button 
      size="lg"
      onClick={handleCall}
      className="bg-primary hover:bg-primary/90"
    >
      Get a Call Now
    </Button>
  )
} 