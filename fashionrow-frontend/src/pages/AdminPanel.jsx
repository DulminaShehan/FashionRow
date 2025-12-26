import { useState } from 'react';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Panel</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 ${activeTab === 'products' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Manage Products
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 ${activeTab === 'orders' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab('offers')}
          className={`px-4 py-2 ${activeTab === 'offers' ? 'border-b-2 border-purple-600 text-purple-600' : 'text-gray-600'}`}
        >
          Special Offers
        </button>
      </div>

      {/* Content */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Product Name" className="w-full px-4 py-2 border rounded" />
            <input type="number" placeholder="Price" className="w-full px-4 py-2 border rounded" />
            <select className="w-full px-4 py-2 border rounded">
              <option>Select Category</option>
              <option>Men</option>
              <option>Women</option>
              <option>Kids</option>
            </select>
            <textarea placeholder="Description" className="w-full px-4 py-2 border rounded" rows="4"></textarea>
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
              Add Product
            </button>
          </form>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
          <p className="text-gray-600">No orders yet.</p>
        </div>
      )}

      {activeTab === 'offers' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Create Special Offer</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Offer Title" className="w-full px-4 py-2 border rounded" />
            <input type="number" placeholder="Discount %" className="w-full px-4 py-2 border rounded" />
            <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
              Create Offer
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;